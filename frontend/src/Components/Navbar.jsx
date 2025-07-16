import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch , getCartCount, navigate , token , setToken ,setCartItems} = useContext(ShopContext);
 const logout =()=>{
  navigate('/login')
  localStorage.removeItem('token')
  setToken('')
  setCartItems({})
  


 }
  return (
    <>
      <div className='flex items-center justify-between py-5 px-6 font-medium bg-black text-white'>

        {/* Left Section: Logo */}
        <Link to='/'>
          <img src={assets.logo} className='w-36 invert' alt="Logo" />
        </Link>

<ul className='hidden sm:flex items-center gap-8'>
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `relative py-2 px-1 text-white/90 hover:text-white transition-all duration-300 ${
          isActive ? 'font-semibold text-white' : ''
        }`
      }
    >
      HOME
      {({ isActive }) => isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline origin-left"></span>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/collection"
      className={({ isActive }) =>
        `relative py-2 px-1 text-white/90 hover:text-white transition-all duration-300 ${
          isActive ? 'font-semibold text-white' : ''
        }`
      }
    >
      COLLECTION
      {({ isActive }) => isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline origin-left"></span>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `relative py-2 px-1 text-white/90 hover:text-white transition-all duration-300 ${
          isActive ? 'font-semibold text-white' : ''
        }`
      }
    >
      ABOUT
      {({ isActive }) => isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline origin-left"></span>
      )}
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `relative py-2 px-1 text-white/90 hover:text-white transition-all duration-300 ${
          isActive ? 'font-semibold text-white' : ''
        }`
      }
    >
      CONTACT
      {({ isActive }) => isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-underline origin-left"></span>
      )}
    </NavLink>
  </li>
</ul>



        {/* Right Section: Icons */}
        <div className='flex items-center gap-6'>
          <img onClick={()=>setShowSearch(true)} className='w-5 cursor-pointer invert' src={assets.search_icon} alt="Search" />

    <div className='group relative z-50'>
 <img onClick={()=>token ? null : navigate('/login')} className='w-5 cursor-pointer invert' src={assets.profile_icon} alt="Profile" />
  {/* Drop down Menu */}
  {token &&
   <div className="group-hover:block hidden absolute right-0 pt-4 z-50">
    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-black text-white rounded shadow-lg'>
      <p className='cursor-pointer hover:text-red-400'>My Profile</p>
      <p onClick={()=>navigate('/orders')}className='cursor-pointer hover:text-red-400'>Orders</p>
      <p onClick={logout} className='cursor-pointer hover:text-red-400'>Logout</p>
    </div>
  </div>}
</div> 
 


          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5 invert' alt="Cart" />
            <p className='absolute right-[5px] bottom-0 w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>

          {/* Mobile menu icon */}
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden invert' alt="Menu" />
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`fixed top-0 right-0 h-full bg-white transition-all duration-300 z-50 ${visible ? 'w-3/4' : 'w-0 overflow-hidden'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='Back Icon' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
