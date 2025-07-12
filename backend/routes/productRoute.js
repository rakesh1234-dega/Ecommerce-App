import express from 'express';
import {
  listProducts,
  addProduct,
  removeProduct,
  singleProduct
} from '../controllers/productController.js';

import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Route to add a new product (Admin only + with image uploads)
productRouter.post(
  '/add',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);

// Route to remove a product (Admin only)
productRouter.post('/remove', adminAuth, removeProduct);

// Route to get a single product's details
productRouter.post('/single', singleProduct);

// ✅ Public route to get all products
productRouter.get('/list', listProducts);

export default productRouter;
