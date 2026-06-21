module.exports = {
  networks: {
    development: {
      privateKey: "",
      userFeePercentage: 100,
      feeLimit: 1000000000,
      originEnergyLimit: 10000000,
      fullHost: "https://api.nileex.io"
    }
  },

  compilers: {
    solc: {
      version: "0.8.26"
    }
  }
};