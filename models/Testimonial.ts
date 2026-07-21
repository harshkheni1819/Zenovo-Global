import mongoose, { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema(
  {
    name: String,
    designation: String,
    company: String,
    message: String,
    image: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

export default models.Testimonial ||
  model("Testimonial", TestimonialSchema);