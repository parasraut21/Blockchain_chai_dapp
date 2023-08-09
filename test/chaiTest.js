const Chai = artifacts.require("chai");

contract("Chai", (accounts) => {
  let chaiInstance;

  beforeEach(async () => {
    chaiInstance = await Chai.new();
  });

  it("should allow buying Chai and add a memo", async () => {
    const name = "John";
    const message = "Hello, world!";
    const value = web3.utils.toWei("1", "ether");

    await chaiInstance.buyChai(name, message, { from: accounts[0], value });

    const memos = await chaiInstance.getMemos();
    assert.equal(memos.length, 1, "Number of memos should be 1");
    assert.equal(memos[0].name, name, "Memo name should match");
    assert.equal(memos[0].message, message, "Memo message should match");
    assert.equal(memos[0].from, accounts[0], "Memo sender should match");
  });
});
