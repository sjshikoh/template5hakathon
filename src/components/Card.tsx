import React from "react";
import Image from "next/image";

interface ICardProps {
  
  image: string;
  title?: string;
  department?: string;
  price?: string;
  discountedPrice?: string;
  rating?: string;
  showText?: boolean
}

const Card = (props: ICardProps) => { 
 const {image, title, department, price, discountedPrice, rating, showText = true} = props
  return (
    // <div className={`${Image} `}>

    <div className="w-full xl:w-[238px] h-[615px] flex flex-col">
      {/* Image Section */}
      <div className="w-full h-[427px] flex justify-center items-center">
        <Image
          src={image}
          alt={title || "Product"}
          width={348}
          height={427}
          className="object-cover rounded-lg"
          />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between w-full h-[188px] mt-4 text-center">
        <div className="font-medium text-lg">{title}</div>
        <div className="text-gray-500 text-sm">{department}</div>
        <div className="flex items-center justify-center space-x-2 text-sm">
          <p className="line-through text-gray-400">{price}</p>
          <p className="text-[#23856D] font-semibold">{discountedPrice}</p>
        </div>
        {rating && (
          <div className="mt-0">
            🔵🟢🟠🟢 {/* Replace with dynamic ratings if needed */}
            </div>
        )
       }
        </div>
       
      </div>
    // </div>
  );
};

export default Card;


