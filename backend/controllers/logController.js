const SystemLog =
    require("../models/SystemLog");

const {

    successResponse,

    errorResponse

} = require("../utils/responseHandler");

const getLogs = async (req, res) => {

    try {

        const logs =
            await SystemLog
                .find()
                .sort({
                    createdAt: -1
                });

        return successResponse(

            res,

            logs,

            "Logs fetched successfully"

        );

    }

    catch (error) {

        return errorResponse(

            res,

            error.message,

            500

        );

    }

};

module.exports = {

    getLogs

};