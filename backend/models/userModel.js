import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }
  },
  { minimize: false } // Keep empty objects in cartData
);

// Fix for re-registering model during hot reload (like in Next.js or nodemon)
const userModel = mongoose.models.User || mongoose.model("User", userSchema);

export default userModel;
