const {
    generateFileHash
} = require("../services/hashService");

const {
    successResponse,
    errorResponse
} = require("../utils/responseHandler");

const documents = [];

const uploadDocument = async (
    req,
    res
) => {

    try {

        const file = req.file;

        const {
            propertyId
        } = req.body;

        if (!file) {

            return errorResponse(
                res,
                "No file uploaded",
                400
            );

        }

        if (!propertyId) {

            return errorResponse(
                res,
                "Property ID is required",
                400
            );

        }

        const documentHash =
            generateFileHash(file.path);

        const document = {

            propertyId,

            documentHash,

            documentURI:
                file.filename,

            issueDate:
                Date.now(),

            status:
                "Pending"

        };

        documents.push(document);

        return successResponse(
            res,
            document,
            "Document registered successfully"
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
    uploadDocument
};