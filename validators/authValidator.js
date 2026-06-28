const { body } = require("express-validator");

const registerValidation = [

    body("walletAddress")
        .notEmpty()
        .withMessage("Wallet address is required"),

    body("nationalId")
        .notEmpty()
        .withMessage("National ID is required"),

    body("role")
        .notEmpty()
        .withMessage("Role is required")

];

const loginValidation = [

    body("walletAddress")
        .notEmpty()
        .withMessage("Wallet address is required")

];

module.exports = {

    registerValidation,

    loginValidation

};