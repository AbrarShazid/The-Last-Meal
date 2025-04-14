import React from 'react';

const Footer = ({mode}) => {
  return (
    <div className={mode ? "bg-[#F3F4F6] text-black border border-[#D1D5DB] flex flex-col items-center gap-5 py-[4%]" : "bg-gray-400 text-white border border-[#D1D5DB] flex flex-col items-center gap-5 py-[4%]" }>

      <h1 className='text-2xl font-medium'>Best Food Recipe From Best Chef</h1>
      <div className='flex '>

      <input className={`outline-0 py-1 px-2 border-[.5px] border-green-500 rounded-l-2xl bg-transparent ${
    mode ? 'text-black placeholder-[#9CA3AF]' : 'text-white placeholder-white'
  }`} type="text" name="" id=""  placeholder='Enter Your Mail'/>
      <button className=" py-2 px-4 rounded-r-2xl bg-green-500 text-white hover:bg-green-600 font-semibold">Subscribe</button>

      </div>
     <ul className='flex gap-4 text-lg'>
     <li>Feedback</li>
      <li>Contact Us</li>
      <li>Complain</li>
     
     </ul>
     
      


    </div>
  );
};

export default Footer;