import express from  'express'
import {placeOrder, placeOrderRazorpay,placeOrderStripe,allOrders,userOrders,updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/authi.js'
const orderRouter = express.Router()
// admin futhures
orderRouter.post('/list', adminAuth, allOrders); 


orderRouter.post('/status',adminAuth,updateStatus)
// Payment futhures
orderRouter.post('/place',authUser ,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)
// user feature
orderRouter.post('/userorders',authUser,userOrders)
/// verify payment
orderRouter.post('/verifyStripe', authUser , verifyStripe)
orderRouter.post('/verifyRazorpay', authUser ,verifyRazorpay)


export default orderRouter