const { create } = require("ipfs-http-client");

const fs = require("fs");

const client = create({

    url: "http://127.0.0.1:5001/api/v0"

});

const uploadToIPFS = async (filePath) => {

    try {

        const file = fs.readFileSync(filePath);

        const result = await client.add(file);

        return result.cid.toString();

    }

    catch (error) {

        throw error;

    }

};

module.exports = {

    uploadToIPFS

};