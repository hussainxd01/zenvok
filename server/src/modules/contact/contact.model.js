import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: String,
    message: { type: String, required: true },

    selectedPlan: {
      type: String,
      enum: ["starter", "ecommerce", "premium", "not_selected"],
      default: "not_selected",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
