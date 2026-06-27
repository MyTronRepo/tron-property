const express = require("express");

const router = express.Router();

const upload =
    require("../config/multer");

const {

    registerDocument,

    getDocumentsByProperty,

    getDocumentById,

    verifyDocument,

    uploadDocument

} = require("../controllers/documentController");

router.post(
    "/register",
    registerDocument
);

router.get(
    "/property/:propertyId",
    getDocumentsByProperty
);

router.get(
    "/:documentId",
    getDocumentById
);

router.put(
    "/verify/:documentId",
    verifyDocument
);

router.post(
    "/upload/:documentId",
    upload.single("document"),
    uploadDocument
);

module.exports = router;