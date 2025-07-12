import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className='text-slate-200 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 transition ease-in-out duration-300'
          src={Array.isArray(image) ? image[0] : image} // ✅ handles both array and string
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>
        {currency}
        {price}
      </p>
    </Link>
  )
};

export default Productitem;
