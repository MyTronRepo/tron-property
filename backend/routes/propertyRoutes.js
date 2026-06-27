const express = require("express");

const router = express.Router();

const {
    healthCheck,
    registerProperty,
    getPropertyById,
    updateProperty,
    deleteProperty
} = require("../controllers/propertyController");

router.get("/health", healthCheck);

router.post("/register", registerProperty);

// NEW APIs
router.get("/:propertyId", getPropertyById);

router.put("/:propertyId", updateProperty);

router.delete("/:propertyId", deleteProperty);

module.exports = router;