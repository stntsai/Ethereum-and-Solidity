// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDWalletProvider(
    // the below wallet is for testing only, no actual ether contained
    'before mobile boat general hedgehog alter satoshi scrap other athlete salmon unique',
    'https://rinkeby.infura.io/v3/cf0d54c2cc2e4978852c2c5e448bb19f'
); 

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await new web3.eth.getAccounts();

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: ['first deploy']})
        .send({from: accounts[0], gas: '1000000'});
    console.log('Contract deployed at: ',result.options.address);

    provider.engine.stop()
};

deploy();