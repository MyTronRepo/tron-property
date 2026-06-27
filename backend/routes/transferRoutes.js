const express = require("express");

const router = express.Router();

const {

    createTransferRequest,

    getAllTransfers,

    getTransferHistory,

    approveTransferByBuyer,

    approveTransferByAdmin

} = require("../controllers/transferController");

router.post(
    "/create",
    createTransferRequest
);

router.get(
    "/",
    getAllTransfers
);

router.get(
    "/history",
    getTransferHistory
);

router.patch(
    "/buyer-approve/:transferId",
    approveTransferByBuyer
);

router.patch(
    "/admin-approve/:transferId",
    approveTransferByAdmin
);

module.exports = router;