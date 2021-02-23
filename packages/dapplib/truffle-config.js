require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth remain protect hidden enroll bottom gift'; 
let testAccounts = [
"0xc304220b66c3b32b174cd35f14c351b701ebb078d8c9d4358307ea8465b63659",
"0x934a95b00ceb0e6f6f88a75b535fe568184a74c26f0aa3e8030a228573e760e5",
"0x010e6d71523b13797295a6e59855da4b432d987db21594b037b4c47a05d3498a",
"0x19e5b4f4fc9ad9a6b19524ff6db48f2514f7e2eea3f60b795f1276777b276549",
"0xf659c9c5d984dd1752cdfdb0c8c0a18b34d80e9bc4643b14cccfa02993080e91",
"0x5efdbe8468ba93bf3ffe2fc630eb9dfc4e63e9d6a62874751cae0f85ceaebbc5",
"0xaee4f5d80177d84afd08d8b17949bb59ee40ddfed2d965e2d10d795489cd7b11",
"0xde0e67202f5e4610f791cb60ddcd869876ecb8859fad2d3882d7227ed3536b95",
"0x43b6e27f50afbb1fd077daf1d9113b1aaac2c35b8bf243b66e46f3de07dc3892",
"0x865f8b047afa2b8f5d4a0cf0ddeaa81c440bdd21c8da3856d917dc1c9e6e0164"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
