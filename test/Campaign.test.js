const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');
let accounts;
let factory;
let campaign;
let campaignAddress;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(compiledFactory.abi)
        .deploy({ data: compiledFactory.evm.bytecode.object })
        .send({ from: `${accounts[0]}`, gas: '3000000' });

    await factory.methods.createCampaign('100')
        .send({ from: `${accounts[0]}`, gas: '3000000' });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe('Campaign', () => {
    it('deploys a factory and campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('markes caller as manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('requires minimum amopunt to enter', async () => {
        let errorOccurred = false;
        try {
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '99'
                //value: web3.utils.toWei('.001', 'ether')
            });
        } catch (err) {
            errorOccurred = true;
        }
        assert.equal(true, errorOccurred);
    });

    it('allows people to contribute and marks them as contributor', async () => {
        await campaign.methods.contribute()
            .send({ value: '200', from: accounts[1] });

        const isApprover = await campaign.methods.approvers(accounts[1]).call();
        assert.equal(true, isApprover);
    });

    it('allows manager to make a payment request', async () => {
        const REQUEST_VALUE = '150';
        await campaign.methods
            .createRequest('Buy Something', REQUEST_VALUE, accounts[2])
            .send({ from: accounts[0], gas: 800000 });

        const request = await campaign.methods.requests(0).call();
        assert.equal(accounts[2], request.recipient);
        assert.equal(REQUEST_VALUE, request.value);
    });

    it('processes requests', async () => {
        const manager = accounts[0];
        const contributor = accounts[1];
        const outsider = accounts[2];

        let outsiderBalanceBefore = await web3.eth.getBalance(outsider);
        outsiderBalanceBefore = web3.utils.fromWei(outsiderBalanceBefore, 'ether');
        outsiderBalanceBefore = parseFloat(outsiderBalanceBefore);

        await campaign.methods.contribute().send({
            value: web3.utils.toWei('10', 'ether'),
            from: contributor
        });

        await campaign.methods
            .createRequest('Buy Something', web3.utils.toWei('5', 'ether'), outsider)
            .send({ from: accounts[0], gas: 800000 });

        await campaign.methods.approveRequest(0).send({ from: contributor, gas: 800000 });
        await campaign.methods.finalizeRequest(0).send({ from: manager, gas: 800000 });
        
        let outsiderBalanceAfter = await web3.eth.getBalance(outsider);
        outsiderBalanceAfter = web3.utils.fromWei(outsiderBalanceAfter, 'ether');
        outsiderBalanceAfter = parseFloat(outsiderBalanceAfter);
        assert(4.95 < outsiderBalanceAfter - outsiderBalanceBefore);
    });

});