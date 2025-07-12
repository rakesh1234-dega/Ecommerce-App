import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import axios from 'axios';

const Order = () => {
  const { backendUrl,token, currency } = useContext(ShopContext);
  const[orderData,setorderData] = useState([])
  const loadOrderData = async ()=>{
    try {
      if (!token) {
        return null
        
      }
      const response = await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem =[]
        response.data.orders.map((orders)=>{
        orders.items.map((item) => {
  item['status'] = orders.status;
  item['payment'] = orders.payment;
  item['paymentMethod'] = orders.paymentMethod;
  item['date'] = orders.date;
  allOrdersItem.push(item);
});


        })
        setorderData(allOrdersItem.reverse())
        
      }
    } catch (error) {
      
    }

  }
  useEffect(()=>{
    loadOrderData()

  },[token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl text-slate-200'>
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>

      <div>
        {
        orderData.map((item, index) => (
          <div
            key={index}
            className='py-4 border-t border-b text-white flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img
                className='w-16 sm:w-20'
                src={item.images?.[0]}
                alt={item.name}
              />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-1 text-base text-slate-100'>
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className='mt-1'>Date: <span className='text-slate-50'>{new Date(item.date).toDateString()}</span></p>
                <p className='mt-1'>Payment: <span className='text-slate-50'>{item.paymentMethod}</span></p>
              </div>
            </div>

            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-lime-400'></p>
                <p className='text-sm md:text-base'>{item.status}</p>
              </div>
            <button onClick={() => handleTrackOrder(item)} className='border px-4 py-2 text-sm font-medium rounded-sm'>TRACK ORDER</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
