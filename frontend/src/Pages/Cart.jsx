import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="text-2xl mb-6">
        <Title text1={'YOUR='} text2={'CART'} />
      </div>

      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div
              key={index}
              className="bg-slate-800 text-slate-100 rounded-xl p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              {/* Left: Product Info */}
              <div className="flex items-center gap-6">
                <img className="w-20 h-20 object-cover rounded-lg" src={productData?.images?.[0]} alt="" />
                <div>
                  <p className="text-base font-semibold">{productData?.name}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-sm text-slate-300">
                      {currency}
                      {productData?.price}
                    </p>
                    <p className="text-xs px-3 py-1 border rounded-full text-black bg-slate-200">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Quantity & Delete */}
              <div className="flex items-center gap-6">
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className="w-16 h-9 text-center text-black px-2 border rounded-md bg-white"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Delete"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Total & Checkout */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px] bg-slate-900 p-6 rounded-xl shadow-xl">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate('/place-order')}
              className="bg-white hover:bg-slate-200 text-black text-sm mt-8 px-8 py-3 rounded-full transition-all"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
