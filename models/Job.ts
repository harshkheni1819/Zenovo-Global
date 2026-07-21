import mongoose, { Schema, models, model } from "mongoose";

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    employmentType: {
      type: String,
      enum: ["Full Time", "Part Time", "Contract", "Internship", "Remote"],
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    skills: [
      {
        type: String,
      },
    ],

    description: {
      type: String,
      required: true,
    },

    responsibilities: {
      type: String,
      required: true,
    },

    requirements: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Active",
    },

    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Job || model("Job", JobSchema);