import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true || item.bestseller === "true");
    setBestSeller(bestProduct.slice(0,5));
  }, [products]);

  console.log("All Products:", products);
  console.log("Best Sellers:", bestSeller);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8 text-slate-100'>
        <Title text1='BEST' text2='   SELLERS' />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero amet, est nemo inventore quos ullam molestiae voluptas aperiam doloremque.
        </p>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {bestSeller.map((item) => (
          <Productitem
            key={item._id}
            id={item._id}
            name={item.name}
            image={item.images?.[0]}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
