import mongoose, { Schema, model, models } from "mongoose";

const CompanySchema = new Schema(
  {
    name: String,
    logo: String,
    website: String,
    email: String,
    location: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default models.Company || model("Company", CompanySchema);