import { model, Schema } from "mongoose";

export interface User {
  id: string;
  role: string; // BHW, Midwife, Admin
  firstName: string;
  lastName: string;
  username: string; // Either Gmail or phone number
  password: string;
  dateOfService: string;
  secretKey?: string;
  // dateOfService: Date;
}

// Define the User schema
const UserSchema = new Schema(
  {
    role: { type: String, required: true }, // BHW, Midwife, Admin
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true }, // Either Gmail or phone number, must be unique
    password: { type: String, required: true }, // Ensure this is hashed before storing
    dateOfService: { type: String, required: true }, // Consider changing to Date if performing date operations
    secretKey: { type: String, required: false }, // Optional secret key for future use
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

// Create and export the User model
export const UserModel = model<User>("user", UserSchema);
