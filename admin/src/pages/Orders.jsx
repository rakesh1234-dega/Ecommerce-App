import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets'; // Ensure this path is correct

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("📦 All Orders Response:", response.data);

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(" Axios Error:", error);
    }
  };
  const statusHandler = async(event,orderId)=>{
    try {
      const response = await axios.post(backendUrl+'/api/order/status',{orderId, status:event.target.value},{ headers: {
          Authorization: `Bearer ${token}`,
        },})
      if (response.data.success) {
        await fetchAllOrders()
        
      }
    } catch (error) {
  console.log(error);
  toast.error(error.response?.data?.message || "Failed to update status");
}

  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Orders Page</h3>
      <div>
        {orders.map((order, index) => (
          
        <div className="border border-gray-200 p-5 md:p-8 my-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start text-xs sm:text-sm text-gray-700" key={index}>

    {/* 1. Product Info */}
    <div className="flex items-start gap-3">
      <img className='w-12' src={assets.parcel_icon} alt='' width={40} />
      <div>
        {order.items.map((item, idx) => (
          <p key={idx}>
            {item.name} x {item.quantity} <span>{item.size}</span>{idx !== order.items.length - 1 ? ',' : ''}
          </p>
        ))}
        
      </div>
    </div>

    {/* 2. Customer Address */}
    <div>
      <p className="font-semibold mt-3 mb-2">{order.address.firstName} {order.address.lastName}</p>
      <p>{order.address.street},</p>
      <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
      <p className="mt-1">Phone: {order.address.phone}</p>
    </div>

    {/* 3. Payment Info */}
    <div>
      <p className="text-sm sm:text-[15px]">Items: {order.items.length}</p>
      <p className='mt-3'>Method: {order.paymentMethod}</p>
      <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
      <p>Date: {new Date(order.date).toLocaleDateString()}</p>
      <div>
      <p className="text-sm sm:text-[15px]">{currency} {order.amount}</p>
      </div>
    </div>
    

    {/* 4. Amount & Status */}
    <div className="flex flex-col gap-2">
      <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="p-2  border-2 font-semibold">
      <option value="Order placed">Order Placed</option>
        <option value="Packing">Packing</option>
        <option value="Shipped">Shipped</option>
        <option value="Out for delivery">Out for delivery</option>
        <option value="Delivered">Delivered</option>
      </select>
    </div>

  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Orders;
