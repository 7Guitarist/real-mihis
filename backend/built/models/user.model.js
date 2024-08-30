"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
// Define the User schema
var UserSchema = new mongoose_1.Schema({
    role: { type: String, required: false }, // BHW, Midwife, Admin
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // Either Gmail or phone number, must be unique
    password: { type: String, required: true }, // Ensure this is hashed before storing
    dateOfService: { type: Date, required: false }, // Consider changing to Date if performing date operations
    gender: { type: String, required: false },
    photoPath: { type: String, required: false }, // Optional secret key for future use
    secretKey: { type: String, required: false }, // Optional secret key for future use
}, {
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});
// Create and export the User model
exports.UserModel = (0, mongoose_1.model)("user", UserSchema);
