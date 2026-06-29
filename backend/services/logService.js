const { v4: uuidv4 } = require("uuid");

const SystemLog =
    require("../models/SystemLog");

const createLog = async ({

    action,

    userWallet = "",

    entity = "",

    entityId = "",

    description = "",

    ipAddress = ""

}) => {

    try {

        await SystemLog.create({

            logId: uuidv4(),

            action,

            userWallet,

            entity,

            entityId,

            description,

            ipAddress

        });

    }

    catch (error) {

        console.log("Log Error:", error.message);

    }

};

module.exports = {

    createLog

};