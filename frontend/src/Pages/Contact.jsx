import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 '>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img}/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-slate-300'>Our Store</p>
          <p className='text-slate-200'>Discover timeless fashion, modern style, and everyday .<br /> comfort — all in one place.
At Forever, we design clothes that feel as good as they look</p>
          <p className='text-slate-200'> Tel : (+91) 7780470071<br/>Email:degarakesh72@gmail.com </p>
          <p className='font-semibold text-xl text-slate-100'> Careers at Forever</p>
         <p className='text-slate-200'> Learn more about our teams and job openings.. </p>
         <button className='border border-slate-200  text-gray-100 px-8 py-4 text-sm hover:bg-gray-600 hover:text-slate-100 transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact