require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember mistake island kitten sun gauge'; 
let testAccounts = [
"0x008e262f9c3d72889cf4c2b9bad39e025420829e8c1a64348b9431328eb5dde0",
"0xc96f5e876d75ee5bee7ddc86c867245c9cd2bbbbad9b31747b3f5691a361eb2c",
"0x4a17a1a2c8d94038a9f57eebe8878c816edb5cbd88076e73f66c5c5939c88c5a",
"0x30e66da5cf2d8081fa9921416805963a7f4b8cb43d52e71aa0bdb95be3ae6bb4",
"0x1a24e5280ca90301ee817bae40b9d7276d2ac7760429e44d73590776ade17270",
"0x328ec5228ccc10f004e3b1b0c229c4ab39130ad50532bb404a84cb50d2c1d016",
"0xadd06b6a88e58afa6e510a67e30365a15a591a4fd93259c5acb7e2971bc4538f",
"0x016df11752ebc732b3b385d5a3406c816b3fd1a16880c6767f95785262c91092",
"0x248941187363e7920c129abae8e24322223a0fe6e48ad75ada4f0de794304acd",
"0x54ce4ae116b90eb833c5cc184b390970bc0b8537a426da87696c64271a1280b2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


