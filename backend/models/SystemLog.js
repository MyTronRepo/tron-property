const mongoose = require("mongoose");

const systemLogSchema = new mongoose.Schema({

    logId: {
        type: String,
        required: true,
        unique: true
    },

    action: {
        type: String,
        required: true
    },

    userWallet: {
        type: String,
        default: ""
    },

    entity: {
        type: String,
        default: ""
    },

    entityId: {
        type: String,
        default: ""
    },

    description: {
        type: String,
        default: ""
    },

    ipAddress: {
        type: String,
        default: ""
    }

}, {

    timestamps: true

});

module.exports = mongoose.model(
    "SystemLog",
    systemLogSchema
);