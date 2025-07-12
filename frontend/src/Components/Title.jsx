import React from 'react'

const Title = ({ text1, text2 }) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-50'>
        {text1}
        <span className='text-slate-300 font-medium transition duration-300 ease-in-out hover:scale-105 hover:text-amber-300 drop-shadow-sm'>
          {text2}
        </span>
      </p>
      <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-stone-50'></p>
    </div>
  )
}

export default Title
