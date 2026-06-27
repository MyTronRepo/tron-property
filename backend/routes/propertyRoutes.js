const express = require("express");

const router = express.Router();

const {

    healthCheck,

    registerProperty,

    searchProperties,

    getPropertyById,

    updatePropertyStatus

} = require("../controllers/propertyController");

router.get("/health", healthCheck);

router.post(
    "/register",
    registerProperty
);

router.get(
    "/search",
    searchProperties
);

router.get(
    "/:propertyId",
    getPropertyById
);

router.patch(
    "/:propertyId/status",
    updatePropertyStatus
);

module.exports = router;