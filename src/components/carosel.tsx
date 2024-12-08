import React from "react";

const Carosel = () => {
  return (
    <div className="wrapper h-[753px] md:h-[716px] relative bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url('/product-slide-1.jpg')" }}>
      {/* Desktop Background Image */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/shop-hero-1-product-slide-1.jpg')" }}
      />

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-10">
        <div className="mb-6">
          <h5 className="text-lg md:text-xl font-semibold uppercase tracking-wide">
            SUMMER 2020
          </h5>
        </div>
        <div className="mb-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            NEW COLLECTION
          </h1>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            We know how large objects will act, but things on a small scale.
          </p>
        </div>
        <button className="px-6 py-3 md:px-8 md:py-4 w-auto bg-[#2DC071] text-white font-medium text-sm md:text-base rounded-md hover:bg-[#28a05e] transition">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Carosel;


































// import React from "react";
// import Image from "next/image";
// import Button from '@/components/button'

// const Carosel = () => {
//   return (
//     <div>
//       <div className="wrapper h-[753px] md:h-[716px]">
//         {/* Correct placement of className */}
//         <div
//   className="relative w-full md:w-[716px] min-h-[753px] md:min-h-[716px] 
//              bg-no-repeat bg-center bg-cover 
//             { backgroundImage-[url('/product-slide-1.jpg')] }
//              md:bg-[url('/shop-hero-1-product-slide-1.jpg')] 
//              rounded-lg shadow-lg"
//   aria-label="Decorative background image"
//   role="img"
// />
// <div className="absolute inset-0 flex flex-col items-center justify-center  text-white text-center px-4 md:px-10">
//           {/* Optional: Add content here if needed */}
//         <div className="mb-6">
//             <h5 className="text-lg md:text-xl font-semibold uppercase tracking-wide">SUMMER 2020</h5>
//         </div>
//         <div className="mb-6">
//             <h1 className="text-3xl md:text-5xl font-bold leading-tight">NEW 
//             COLLECTION</h1>
//             <p className="mt-4 text-sm md:text-base leading-relaxed">We know how large objects 
// will act, but things on a 
// small scale.</p>
// <button className='px-6 w-[221px] h-[62px] bg-[#2DC071] rounded-md'>
//       SHOP NOW
//     </button>
//         </div>
//       </div>
//         </div>
//     </div>
//   );
// };

// export default Carosel;
