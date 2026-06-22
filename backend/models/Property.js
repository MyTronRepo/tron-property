const mongoose = require("mongoose");

const ownerSchema =
    new mongoose.Schema({

        walletAddress: {
            type: String,
            required: true
        },

        nationalIdHash: {
            type: String,
            required: true
        },

        share: {
            type: Number,
            required: true
        }

    });

const propertySchema =
    new mongoose.Schema({

        propertyId: {
            type: String,
            required: true,
            unique: true
        },

        province: String,

        city: String,

        district: String,

        parcelNumber: String,

        area: Number,

        buildYear: Number,

        usageType: String,

        constructionStatus: String,

        latitude: Number,

        longitude: Number,

        owners: [ownerSchema],

        status: {
            type: String,
            default: "Pending"
        },

        exists: {
            type: Boolean,
            default: true
        }

    }, {
        timestamps: true
    });

module.exports =
    mongoose.model(
        "Property",
        propertySchema
    );