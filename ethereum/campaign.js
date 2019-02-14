import web3 from './web3';
import compliedCampaign from './build/Campaign.json';

export default (address) => {
    return new web3.eth.Contract(
        compliedCampaign.abi, address
    );
};