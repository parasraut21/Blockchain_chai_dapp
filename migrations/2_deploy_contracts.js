const Chai = artifacts.require("chai");

module.exports = function (deployer) {
  deployer.deploy(Chai);
};