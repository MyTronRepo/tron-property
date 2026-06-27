const express = require("express");

const router = express.Router();

const {

    healthCheck,

    registerProperty,

    searchProperties,

    getPropertyById

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

module.exports = router;