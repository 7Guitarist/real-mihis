export interface User {
  id: string;
  role: string; // BHW, Midwife, Admin
  firstName: string;
  lastName: string;
  dateOfService: Date;
  username: string; // Either Gmail or phone number
  passwordHash: string; // Hashed password
  secretKey: string; // Used for validating roles like BHW and Midwife
}
