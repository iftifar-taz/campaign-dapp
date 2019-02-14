const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { MNEMONIC, NETWORK } = require('./constents');
const compliedFactory = require('./build/CampaignFactory.json'); 

const provider = new HDWalletProvider(MNEMONIC, NETWORK);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ' + accounts[0]);

    const result = await new web3.eth.Contract(compliedFactory.abi).deploy({
        data: '0x' + compliedFactory.evm.bytecode.object
    }).send({
        from: accounts[0]
    });

    console.log('Contract deployed to: ' + result.options.address);
};

deploy();
