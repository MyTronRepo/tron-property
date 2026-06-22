const mongoose = require("mongoose");

const documentSchema =
    new mongoose.Schema({

        propertyId: {
            type: String,
            required: true
        },

        documentHash: {
            type: String,
            required: true
        },

        documentURI: {
            type: String,
            required: true
        },

        issueDate: {
            type: Number,
            required: true
        },

        status: {
            type: String,
            default: "Pending"
        }

    }, {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "Document",
        documentSchema
    );