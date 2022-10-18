const { expect } = require("chai");

describe("Hello World", function () {
  const message = "Hello World";
  const temp = "Bye world";

  it("Should return message correctly", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy(message);

    // await helloWorld.deployed();
    expect(await helloWorld.print()).to.equal(message);
  });

  it("Should update right message", async function () {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy(message);

    // await helloWorld.deployed();
    await helloWorld.update(temp);
    expect(await helloWorld.print()).to.equal(temp);
  });
});
