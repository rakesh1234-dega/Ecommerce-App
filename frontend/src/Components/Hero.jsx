import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import VariableProximity from './VariableProximity';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className='flex flex-col sm:flex-row border border-gray-400'>
      
      {/* Left Section */}
      <div className='w-full sm:w-1/2 flex flex-col items-center justify-center py-10 sm:py-0 gap-4'>
        
        <div className='flex items-center gap-2'>
          <p className='w-8 md:w-11 h-[2px] bg-[#faf7f7]'></p>
          <p className='font-medium text-sm md:text-base text-white'>Our Bestseller</p>
        </div>

        {/* ✅ Fixed: Only one ref used (above), removed duplicate */}
        <div style={{ position: 'relative' }}>
          <VariableProximity
            label={'Latest Arrivals'}
            className='variable-proximity-demo text-6xl font-semibold text-center px-4 text-orange-400 '
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
      
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
            
          />
        </div>

        <div className='flex items-center gap-2'>
          <p className='font-semibold text-sm md:text-base text-white'>Shop now</p>
          <p className='w-8 md:w-11 h-[1px] bg-[#f8f3f3]'></p>
        </div>
      </div>

      {/* Right Image */}
      <img
        className='w-full sm:w-1/2 object-cover'
        src={assets.hero_img}
        alt="Hero"
      />
    </div>
  );
};

export default Hero;
