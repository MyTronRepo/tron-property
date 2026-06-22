require("dotenv").config();

module.exports = {
  networks: {
    nile: {
      privateKey: process.env.PRIVATE_KEY,
      userFeePercentage: 100,
      feeLimit: 1000000000,
      fullHost: "https://nile.trongrid.io",
      network_id: "*"
    }
  },

  compilers: {
    solc: {
      version: "0.8.20"
    }
  }
};