const express = require("express");

const router = express.Router();

const {

    authenticate,

    authorize

} = require("../middleware/authMiddleware");

const {

    getLogs

} = require("../controllers/logController");

router.get(

    "/",

    authenticate,

    authorize("Admin"),

    getLogs

);

module.exports = router;