// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract HelloWorld {
    string public message;

    constructor(string memory _message) {
        message = _message;
    }

    function print() public view returns (string memory) {
        return message;
    }

    function update(string memory _new) public {
        message = _new;
    }
}
