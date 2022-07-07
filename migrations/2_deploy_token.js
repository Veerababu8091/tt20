const Token = artifacts.require("./Bosi");
const config = require("../config.json");

const web3 = require('web3');
const BN = web3.utils.BN;

const initialSupply = new BN(config.50000000);
const name = config.Bosi;
const symbol = config.BNDT;
const decimals = new BN(config.decimals);

module.exports = function(deployer) {
  deployer.deploy(Token, initialSupply, name, symbol, decimals);
};
