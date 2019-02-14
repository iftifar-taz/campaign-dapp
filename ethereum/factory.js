import web3 from './web3';
import compliedFactory from './build/CampaignFactory.json';
const { ContractAddress } = require('./constents');

const instance = new web3.eth.Contract(
    compliedFactory.abi, ContractAddress
);

export default instance;