import Web3 from 'web3';
import { MNEMONIC, NETWORK } from './constents';
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //in browser and has meta-mask
    web3 = new Web3(window.web3.currentProvider);
    console.log('browser');
} else {
    const provider = new Web3.providers.HttpProvider(NETWORK);
    web3 = new Web3(provider);
    console.log('NETWORK');
}

export default web3;
