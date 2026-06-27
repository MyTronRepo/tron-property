const mongoose = require("mongoose");

const userSchema =
    new mongoose.Schema({

        walletAddress: {
            type: String,
            required: true,
            unique: true
        },

        nationalIdHash: {
            type: String,
            required: true
        },

        fullName: {
            type: String,
            required: true
        },

        role: {
    type: String,
    enum: ["owner", "buyer", "admin", "observer"],
    default: "owner"
}

    }, {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "User",
        userSchema
    );