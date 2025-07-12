import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useSearchParams, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {
  const { token, setCartItems, backendUrl } = useContext(ShopContext);
  const navigate = useNavigate(); // ✅ useNavigate hook used correctly
  const [searchParams] = useSearchParams();

  const success = searchParams.get('success');
  const orderId = searchParams.get('orderId');

  const verifyPayment = async () => {
    try {
      if (!token || !orderId || success === null) return;

      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        { headers: { token } }
      );

      if (response.data.success) {
        setCartItems({});
        navigate('/orders');
      } else {
        navigate('/cart');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || 'Verification failed');
      navigate('/cart');
    }
  };

  useEffect(() => {
    verifyPayment();
  }, [token]);

  return (
    <div className='text-center mt-20 text-lg'>
      Verifying your payment, please wait...
    </div>
  );
};

export default Verify;
