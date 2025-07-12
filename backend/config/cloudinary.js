import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config(); // ✅ Ensure .env is loaded

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // ✅ Corrected line
  });
};

export default connectCloudinary;
