import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(location.pathname.includes('collection'));
  }, [location]);

  if (!(showSearch && visible)) return null;

  return (
    <div className="bg-black/90 backdrop-blur-sm py-4 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className={`relative max-w-xl mx-auto transition-all duration-300 ${isFocused ? 'scale-[1.02]' : ''}`}>
          <div className="relative flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full py-3 pl-12 pr-12 bg-gray-900/70 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent transition-all duration-200"
              type="text"
              placeholder="Search collection..."
              autoFocus
            />
            <div className="absolute left-4 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              onClick={() => {
                setShowSearch(false);
                setSearch('');
              }}
              className="absolute right-4 p-1 rounded-full hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;