const express = require("express");

const router = express.Router();

const {

    createTransferRequest,

    getAllTransfers,

    approveTransferByBuyer

} = require(
    "../controllers/transferController"
);

router.post(
    "/",
    createTransferRequest
);

router.get(
    "/",
    getAllTransfers
);

router.patch(
    "/buyer-approve/:transferId",
    approveTransferByBuyer
);

module.exports = router;