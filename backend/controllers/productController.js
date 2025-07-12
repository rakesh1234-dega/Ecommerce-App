import { v2 as Cloudinary } from "cloudinary";
import productModel from "../models/productModele.js";

// ✅ Add Product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Validate required fields
    if (!name || !description || !price || !category || !subCategory || !sizes) {
      return res.status(400).json({ success: false, message: "All required fields must be provided" });
    }

    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await Cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    let parsedSizes;
    try {
      parsedSizes = JSON.parse(sizes);
    } catch (err) {
      return res.status(400).json({ success: false, message: "Invalid sizes format. Must be a JSON array." });
    }

    const newProduct = new productModel({
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true",
      sizes: parsedSizes,
      images: imagesUrl,
      date: Date.now()
    });

    await newProduct.save();

    return res.status(201).json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error("❌ Error in addProduct:", error);
    return res.status(500).json({ success: false, message: "Failed to add product" });
  }
};

// ✅ List All Products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    console.log("✅ List Products:", products.length);
    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("❌ Error in listProducts:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch products" });
  }
};

// ✅ Remove Product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    return res.status(200).json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error("❌ Error in removeProduct:", error);
    return res.status(500).json({ success: false, message: "Failed to remove product" });
  }
};

// ✅ Single Product Info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.error("❌ Error in singleProduct:", error);
    return res.status(500).json({ success: false, message: "Failed to fetch product" });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };
