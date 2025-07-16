import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';

const About = () => {
  return (
    <div className="text-white bg-black min-h-screen px-4 sm:px-10">
      {/* Page Header */}
      <div className="text-3xl text-center pt-10 border-t border-slate-700">
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      {/* About Section */}
      <div className="my-12 flex flex-col md:flex-row gap-10 md:gap-16 items-center">
        <img
          className="w-full md:max-w-[500px] rounded-lg shadow-md"
          src={assets.about_img}
          alt="About Forever"
        />
        <div className="flex flex-col gap-6 md:w-3/5 text-slate-200">
          <p>
            <strong className="text-white">Forever</strong> is more than just a fashion brand — it's a lifestyle.
            We are dedicated to bringing you timeless and trend-forward clothing that inspires confidence, beauty,
            and individuality.
          </p>
          <p>
            Whether you're dressing for a casual day out or a special occasion, we believe you deserve to feel your best — always. With a passion for quality, comfort, and customer satisfaction, Forever ensures you never go out of style.
          </p>
          <p>
            <strong className="text-white">Our Vision:</strong> To become a go-to destination for people who value
            timeless elegance, premium quality, and effortless style — all at prices that feel just right.
          </p>
          <div>
            <strong className="text-white text-lg">Our Mission</strong>
            <p className="mt-2">
              Our mission at <strong className="text-white">Forever</strong> is to empower individuals to express
              themselves confidently through fashion that is timeless, elegant, and accessible. We are committed to
              designing high-quality clothing that celebrates personal style while delivering comfort, value, and sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-2xl text-center mb-6">
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-sm">
        {/* Quality Assurance */}
        <div className="border border-slate-600 bg-slate-900 px-8 py-10 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-white text-lg font-semibold mb-4">Quality Assurance</h3>
          <p className="text-slate-200">
            At Forever, every piece undergoes strict quality checks — from fabric selection to final stitching. We
            ensure durability, comfort, and a flawless finish so you can wear your favorite styles with confidence.
          </p>
        </div>

        {/* Convenience */}
        <div className="border border-slate-600 bg-slate-900 px-8 py-10 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-white text-lg font-semibold mb-4">Convenience</h3>
          <p className="text-slate-200">
            Shop anytime, anywhere. Our smooth browsing experience, quick shipping, and secure payment options make
            it easy to find and receive fashion you love — fast and stress-free.
          </p>
        </div>

        {/* Customer Service */}
        <div className="border border-slate-600 bg-slate-900 px-8 py-10 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-white text-lg font-semibold mb-4">Exceptional Customer Service</h3>
          <p className="text-slate-200">
            Our support team is here for you — friendly, fast, and ready to help. From order assistance to product
            questions, we make sure you’re taken care of at every step.
          </p>
        </div>
      </div>

      {/* Newsletter */}
      <NewsLetterBox />
    </div>
  );
};

export default About;
