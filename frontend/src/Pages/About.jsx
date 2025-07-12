import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-slate-300'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, ipsa totam amet incidunt repellendus cum, dicta iste nam asperiores quos odit libero nulla numquam placeat ab corporis laborum, voluptatum dignissimos?</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda architecto repellendus aspernatur ipsum eius iste? Inventore rerum corrupti sit incidunt deserunt adipisci iure eos autem eum. Consequuntur libero commodi vitae?</p>
         <b className='text-slate-300'>Our Mission</b>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium quibusdam repellendus minima doloremque rem amet quae iste recusandae. Officiis consequuntur nulla iusto adipisci pariatur quo, sunt nemo assumenda commodi!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'> 
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-white'>Quality Assurance :</b>
          <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore, dolores laboriosam suscipit earum quam, porro pariatur consectetur culpa eum, blanditiis repellendus? Tempore tenetur doloribus facilis iusto minus atque optio?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-white'>Convenience:</b>
          <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore, dolores laboriosam suscipit earum quam, porro pariatur consectetur culpa eum, blanditiis repellendus? Tempore tenetur doloribus facilis iusto minus atque optio?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-white'>Exceptional Customer Service:</b>
          <p className='text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi inventore, dolores laboriosam suscipit earum quam, porro pariatur consectetur culpa eum, blanditiis repellendus? Tempore tenetur doloribus facilis iusto minus atque optio?</p>
        </div>
      </div>
      <NewsLetterBox />
      
      
    </div>
  )
}

export default About