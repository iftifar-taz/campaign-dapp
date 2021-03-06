const infura_product_key = 'c3b0f4694b7a4e6aaf7f474e9522fa9c';
const networks = {
    MainnetHttp: 'https://mainnet.infura.io/v3/' + infura_product_key,
    MainnetWebsocket: 'wss://mainnet.infura.io/ws/v3/' + infura_product_key,
    RopstenHttp: 'https://ropsten.infura.io/v3/' + infura_product_key,
    RopstenWebsocket: 'wss://ropsten.infura.io/ws/v3/' + infura_product_key,
    KovanHttp: 'https://kovan.infura.io/v3/' + infura_product_key,
    KovanWebsocket: 'wss://kovan.infura.io/ws/v3/' + infura_product_key,
    RinkebyHttp: 'https://rinkeby.infura.io/v3/' + infura_product_key,
    RinkebyWebsocket: 'wss://rinkeby.infura.io/ws/v3/' + infura_product_key,
    InfuraHttp: 'https://ipfs.infura.io/ipfs/',
    InfuraWebsocket: 'https://ipfs.infura.io:5001/api/',
};

module.exports = {
    //this will be generated after 1st deploy.
    ContractAddress: '0x4ABa6BaE5b9f58ffd21b9CCB6bDeDAc1387065e5',
    MNEMONIC: 'tube yellow recipe endorse expose cloth glove will found govern blur holiday',
    NETWORK: networks.RinkebyHttp,
};
