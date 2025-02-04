// import React from "react";

// const Footer = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default Footer;

import Image from "next/image";

export default function Footer() {
  const footerData = [
    
      
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Resources",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
  ];

  return (
    <footer className="wrapper bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Bandage</h1>
          <div className="flex">
            <div className="relative w-[10px] h-[10px] md:w-[30px] md:h-[30px]">
              <Image src={"/facebook.png"} alt="facebook" fill sizes="23" />
            </div>
            <div className="relative w-[10px] h-[10px] md:w-[30px] md:h-[30px]">
              <Image src={"/instagram.png"} alt="insta" fill sizes="23" />
            </div>
            <div className="relative w-[10px] h-[10px] md:w-[30px] md:h-[30px]">
              <Image src={"/twitter.png"} alt="twitter" fill sizes="23" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {footerData.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm hover:text-gray-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
