const { v4: uuidv4 } = require("uuid");

const Property = require("../models/Property");

const {
    successResponse,
    errorResponse
} = require("../utils/responseHandler");

const healthCheck = async (req, res) => {

    return successResponse(
        res,
        {
            service: "DApp TRON Backend"
        },
        "Backend is running"
    );

};

const registerProperty = async (req, res) => {

    try {

        const {

            province,

            city,

            district,

            parcelNumber,

            area,

            buildYear,

            usageType,

            constructionStatus,

            latitude,

            longitude,

            owners

        } = req.body;

        if (
            !province ||
            !city ||
            !district ||
            !parcelNumber
        ) {

            return errorResponse(
                res,
                "Required property fields are missing",
                400
            );

        }

        if (
            !owners ||
            !Array.isArray(owners) ||
            owners.length === 0
        ) {

            return errorResponse(
                res,
                "At least one owner is required",
                400
            );

        }

        let totalShare = 0;

        for (const owner of owners) {

            if (
                !owner.walletAddress ||
                !owner.nationalIdHash ||
                owner.share === undefined
            ) {

                return errorResponse(
                    res,
                    "Invalid owner information",
                    400
                );

            }

            totalShare += Number(owner.share);

        }

        if (totalShare !== 100) {

            return errorResponse(
                res,
                "Total ownership share must equal 100",
                400
            );

        }

        const property = await Property.create({

            propertyId: uuidv4(),

            province,

            city,

            district,

            parcelNumber,

            area,

            buildYear,

            usageType,

            constructionStatus,

            latitude,

            longitude,

            owners,

            status: "Pending",

            exists: true

        });

        return successResponse(
            res,
            property,
            "Property registered successfully"
        );

    }
    catch (error) {

        return errorResponse(
            res,
            error.message,
            500
        );

    }

};

const searchProperties = async (req, res) => {

    try {

        const {

            province,

            city,

            district,

            usageType,

            status

        } = req.query;

        const filter = {};

        if (province) filter.province = province;

        if (city) filter.city = city;

        if (district) filter.district = district;

        if (usageType) filter.usageType = usageType;

        if (status) filter.status = status;

        const properties = await Property.find(filter);

        return successResponse(
            res,
            properties,
            "Properties fetched successfully"
        );

    }
    catch (error) {

        return errorResponse(
            res,
            error.message,
            500
        );

    }

};

const getPropertyById = async (req, res) => {

    try {

        const { propertyId } = req.params;

        const property = await Property.findOne({
            propertyId
        });

        if (!property) {

            return errorResponse(
                res,
                "Property not found",
                404
            );

        }

        return successResponse(
            res,
            property,
            "Property fetched successfully"
        );

    }
    catch (error) {

        return errorResponse(
            res,
            error.message,
            500
        );

    }

};

const updatePropertyStatus = async (req, res) => {

    try {

        const { propertyId } = req.params;

        const { status } = req.body;

        if (!status) {

            return errorResponse(
                res,
                "Status is required",
                400
            );

        }

        const allowedStatus = [

            "Pending",

            "Approved",

            "Rejected"

        ];

        if (!allowedStatus.includes(status)) {

            return errorResponse(
                res,
                "Invalid status value",
                400
            );

        }

        const property = await Property.findOne({
            propertyId
        });

        if (!property) {

            return errorResponse(
                res,
                "Property not found",
                404
            );

        }

        property.status = status;

        await property.save();

        return successResponse(
            res,
            property,
            "Property status updated successfully"
        );

    }
    catch (error) {

        return errorResponse(
            res,
            error.message,
            500
        );

    }

};

module.exports = {

    healthCheck,

    registerProperty,

    searchProperties,

    getPropertyById,

    updatePropertyStatus

};