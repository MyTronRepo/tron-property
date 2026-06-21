const { v4: uuidv4 } = require("uuid");

const {
    successResponse,
    errorResponse
} = require("../utils/responseHandler");

const transfers = [];

const createTransferRequest = async (
    req,
    res
) => {

    try {

        const {
            propertyId,
            seller,
            buyer,
            transferredShare
        } = req.body;

        if (
            !propertyId ||
            !seller ||
            !buyer ||
            !transferredShare
        ) {

            return errorResponse(
                res,
                "Required fields are missing",
                400
            );

        }

        if (
            Number(transferredShare) < 1
        ) {

            return errorResponse(
                res,
                "Minimum transferable share is 1 percent",
                400
            );

        }

        const transfer = {

            transferId: uuidv4(),

            propertyId,

            seller,

            buyer,

            transferredShare,

            buyerApproved: false,

            adminApproved: false,

            timestamp: Date.now(),

            expireAt:
                Date.now() +
                (7 * 24 * 60 * 60 * 1000),

            status:
                "PendingBuyer"

        };

        transfers.push(transfer);

        return successResponse(
            res,
            transfer,
            "Transfer request created successfully"
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

const getAllTransfers = async (
    req,
    res
) => {

    return successResponse(
        res,
        transfers,
        "Transfers fetched successfully"
    );

};

const approveTransferByBuyer = async (
    req,
    res
) => {

    try {

        const {
            transferId
        } = req.params;

        const transfer =
            transfers.find(
                item =>
                    item.transferId === transferId
            );

        if (!transfer) {

            return errorResponse(
                res,
                "Transfer not found",
                404
            );

        }

        if (
            transfer.status !==
            "PendingBuyer"
        ) {

            return errorResponse(
                res,
                "Transfer cannot be approved by buyer",
                400
            );

        }

        transfer.buyerApproved =
            true;

        transfer.status =
            "PendingAdmin";

        return successResponse(
            res,
            transfer,
            "Transfer approved by buyer"
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

    createTransferRequest,

    getAllTransfers,

    approveTransferByBuyer

};