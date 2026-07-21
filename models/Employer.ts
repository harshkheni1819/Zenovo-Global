import mongoose, { Schema, model, models } from "mongoose";

const EmployerSchema = new Schema(
  {
    companyName: String,
    email: String,
    password: String,
    website: String,
    location: String,
    logo: String,
  },
  {
    timestamps: true,
  }
);

export default models.Employer || model("Employer", EmployerSchema);