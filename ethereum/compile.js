const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const contractPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Campaign.sol': {
            content: fs.readFileSync(contractPath, 'utf8')
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
}

// var output = JSON.parse(solc.compile(JSON.stringify(input))).contracts['Lottery.sol']['Lottery'];
var output = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync(buildPath);

for(let contractFile in output.contracts) {
    for(let contractName in output.contracts[contractFile]) {
        fs.outputJsonSync(
            path.resolve(buildPath, contractName + '.json'),
            output.contracts[contractFile][contractName]
            // {
            //     interface: output.contracts[contractFile][contractName].abi,
            //     bytecode: output.contracts[contractFile][contractName].evm.bytecode.object
            // }
        )
    }
}
