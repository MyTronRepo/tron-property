const mongoose = require("mongoose");

const documentSchema =
    new mongoose.Schema({

        documentId: {
            type: String,
            required: true,
            unique: true
        },

        propertyId: {
            type: String,
            required: true
        },

        documentName: {
            type: String,
            required: true
        },

        documentType: {
            type: String,
            required: true
        },

        documentHash: {
            type: String,
            default: ""
        },

        documentURI: {
            type: String,
            default: ""
        },

        uploadedBy: {
            type: String,
            required: true
        },

        verified: {
            type: Boolean,
            default: false
        }

    }, {

        timestamps: true

    });

module.exports =
    mongoose.model(
        "Document",
        documentSchema
    );