const express = require("express");

const router = express.Router();

const {

    registerDocument,

    getDocumentsByProperty

} = require("../controllers/documentController");

router.post(
    "/register",
    registerDocument
);

router.get(
    "/property/:propertyId",
    getDocumentsByProperty
);

module.exports = router;