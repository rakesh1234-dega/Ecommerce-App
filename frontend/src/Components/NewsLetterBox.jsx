import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
  event.preventDefault();
}

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-white'>subscribe now& get 20% off</p>
        <p className='text-red-100 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo numquam, id facere alias, corporis iste recusandae quidem delectus pariatur incidunt tempore nobis sunt deleniti atque iure doloremque impedit modi cupiditate?
        </p>
        <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3
        ">
            <input className='w-full sm:flex-1 outline-none' type='email'placeholder='Enter Your email'required/>
            <button type="submit"className='bg-red-500 text-white text-xs px-10 py-4'>SUBSCRIBE</button>

            
        </form>
    </div>
  )
}

export default NewsLetterBox