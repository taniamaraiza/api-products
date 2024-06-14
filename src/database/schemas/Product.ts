import mongoose from "mongoose";

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  weight: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: String,
  },
  createdAt: {
    type: Date,
    defalt: Date.now,
  },
});

export default mongoose.model("product", Product);
