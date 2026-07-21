import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["candidate", "employer", "admin"],
      default: "candidate",
    },

    company: String,

    phone: String,

    location: String,

    profileImage: String,
  },
  {
    timestamps: true,
  }
);

export default models.User || model("User", UserSchema);