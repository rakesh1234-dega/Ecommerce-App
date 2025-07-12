import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]); 

  return showSearch && visible ? (
    <div className='border-t border-b bg-black text-center py-5'>
      <div className='inline-flex items-center justify-between border border-gray-700 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2 bg-gray-900'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-transparent text-sm text-white placeholder-gray-400'
          type='text'
          placeholder='Search'
        />
        <img className='w-4 invert mx-2' src={assets.search_icon} alt="Search" />
        <img
          onClick={() => setShowSearch(false)}
          className='w-4 cursor-pointer invert'
          src={assets.cross_icon}
          alt="Close"
        />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
