import React from 'react';
import { assets } from '../assets/assets'; // ✅ Make sure this import exists

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32 invert' alt="Logo" />
        <p className='w-full md:w-2/3 text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi,
          ipsum dolorem excepturi, magnam, voluptatem assumenda neque eligendi
          debitis pariatur error unde in facere tempore repellat odio
          praesentium. Libero, velit?
        </p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5 text-white'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-white'>
          <li>Home</li>
          <li>About</li>
          <li>Delivary</li>
           <li>Privacy Policy</li>

        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
        <ul  className='flex flex-col gap-1 text-white'>
          <li>+91-7780470071</li>
          <li>degarakesh@gmail.com</li>
        </ul>
      </div>
    </div>
    <div>
      <hr />
      <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All rights Reserved..</p>
    </div>
    </div>
  );
};

export default Footer;
