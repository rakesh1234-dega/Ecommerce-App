import React from 'react';
import { assets } from '../assets/assets'; // ✅ Make sure this import exists

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={assets.logo} className='mb-5 w-32 invert' alt="Logo" />
        <p className='w-full md:w-2/3 text-white'>
         Forever is your destination for timeless fashion and everyday elegance.
We bring you thoughtfully curated collections of stylish, comfortable, and high-quality clothing designed to make you look and feel your best — season after season.


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
        <ul className="text-sm text-slate-300 space-y-2">
  <li>
    <a
      href="https://www.instagram.com/rakesh_dega225/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white underline de"
    >
      Instagram: @rakesh_dega225
    </a>
  </li>
  <li>📞 +91-7780470071</li>
  <li>✉️ degarakesh@gmail.com</li>
</ul>

      </div>
    </div>
    <div>
      <hr />
      <p className='py-5 text-sm text-center text-slate-100'>Copyright 2025@ forever.com - All rights Reserved..</p>
    </div>
    </div>
  );
};

export default Footer;
