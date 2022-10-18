require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // defaultNetwork: "bsc testnet",
  networks: {
    hardhat: { chainId: 1337 },

    localhost: {
      url: "http://127.0.0.1:8545",
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      // accounts: {
      //   mnemonic: process.env.PRIVATE_BSC_TESTNET
      //     ? process.env.PRIVATE_BSC_TESTNET
      //     : "",
      // },
      accounts:
        process.env.PRIVATE_BSC_TESTNET !== undefined
          ? [process.env.PRIVATE_BSC_TESTNET]
          : [],
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts:
        process.env.PRIVATE_BSC_MAINNET !== undefined
          ? [process.env.PRIVATE_BSC_MAINNET]
          : [],
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 40000,
  },
};
