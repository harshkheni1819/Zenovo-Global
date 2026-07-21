import mongoose, { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
  {
    title: String,
    slug: String,
    image: String,
    content: String,
    author: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

export default models.Blog || model("Blog", BlogSchema);