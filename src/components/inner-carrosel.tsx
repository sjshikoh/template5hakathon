import React from 'react'
import Image from 'next/image';

const InnerCarosel = () => {
  return (
    <div className='wrapper h-[1366px] md:h-[716px] relative  bg-[#23856D] bg-cover bg-center bg-no-repeat mt-[60px]'>
      <div className='h-full flex flex-col justify-between'>
        <div><div className="absolute inset-0 flex flex-col items-center text-white text-left px-4 md:px-10">
   <div className="mt-60 mb-6">
     <h5 className="text-lg md:text-xl font-semibold uppercase tracking-wide">
       SUMMER 2020
     </h5>
   </div>
   <div className="mb-6 pb-10">
     <h1 className="text-center md:text-left text-3xl md:text-5xl font-bold leading-tight">
     Vita Classic 
     Product
     </h1>
     <p className="w-[291px] h-[90px] mt-4 text-lg md:text-xl leading-relaxed">
       We know how large objects will act, but things on a small scale.
     </p>
   </div>
   <div className="flex justify-center items-center mb-2">
                <h2 className="text-base font-bold text-white line-through">
                  $16.48
                  </h2>
                  </div>
   <button className="w-[184px] h-[52px] px-6 py-3 md:px-8 md:py-4 bg-[#2DC071] text-white font-bold text-sm md:text-base rounded-md hover:bg-[#28a05e] transition">
   ADD TO CART
   </button>
 </div></div>
        <div><Image src="/carosel2.png" alt="" width={416} height={681} className='pt-20' />
         {/* Desktop Background Image */}
         <div
           className="hidden md:block absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('/shop-hero-1-product-slide-1-1.jpg')" }}
         /></div>
      </div>
    </div>

  )
}

export default InnerCarosel
