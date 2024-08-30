"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildModel = void 0;
var mongoose_1 = require("mongoose");
//
// Define the WeighingHistory schema
var WeighingHistorySchema = new mongoose_1.Schema({
    date: { type: Date, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    weightForAgeStatus: { type: String, required: true },
    heightForAgeStatus: { type: String, required: true },
    weightForLengthHeightStatus: { type: String, required: true },
    notes: { type: String, required: false },
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});
// Define the Vaccination schema
var VaccinationSchema = new mongoose_1.Schema({
    vaccineType: { type: String, required: true },
    doseNumber: { type: String, required: true },
    placeOfVaccination: { type: String, required: true },
    dateOfVaccination: { type: String, required: true },
    midwifeId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user", required: true },
    bhwId: { type: mongoose_1.Schema.Types.ObjectId, ref: "user", required: true },
    aefi: {
        occurred: { type: Boolean, required: false },
        description: { type: String, required: false },
        severity: { type: String, required: false },
    },
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});
// Define the Child schema
var ChildSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    purok: { type: String, required: true },
    gender: { type: String, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    barangay: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    photoPath: { type: String, required: false },
    vaccinations: { type: [VaccinationSchema], required: true },
    isFullyVaccinated: { type: Boolean, required: true },
    dateFullyVaccinated: { type: Date, required: false },
    weighingHistory: { type: [WeighingHistorySchema], required: true },
    nutritionalStatus: { type: String, required: false }, // Optional field
    placeOfBirth: { type: String, required: false }, // New optional field
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});
//
exports.ChildModel = (0, mongoose_1.model)("child", ChildSchema);
