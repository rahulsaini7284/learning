import mongoose from "mongoose";

const subCategory = new mongoose.Schema({
  category_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  subCategory: { type: String, unique: true, required: true },
});
export default new mongoose.model("SubCategory", subCategory);
