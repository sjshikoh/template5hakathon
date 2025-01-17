import React from 'react'
import ProductDiscription from '@/components/product-discription';
import Card from '@/components/Card';
import Image from 'next/image';
import Grid from '@/components/Grid'

const cardOneData = [
  {
    image: "/fixed-height (12).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountedPrice: "$6.48",
    
  },
  {
    image: "/fixed-height (11).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$20.00",
    
    
  },
  {
    image: "/fixed-height (10).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    
  },
  {
    image: "/product-cover-5 (2).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$10.00",
   
    
  },
  
 {
    image: "/fixed-height (11).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    
    
  },
 
 {
    image: "/product-cover-5 (1).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    
  },
 
 {
    image: "/product-cover-5 (3).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
   
  },
 
 {
    image: "/fixed-height (12).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
   
  },
 
 
  
];

const Blog = () => {
  return (
    

    
    
    //  <div className="text-gray-600 body-font">
    <div>
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/carousel-inner.png"
          width={506}
          height={450}
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h5 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Floating Phone
       </h5>
       <p className='text-xs my-2'>⭐⭐⭐⭐⭐ 10 reviews</p>
       <h4 className='text-black font-bold text-xs mb-2'>$1,139.33</h4>
       <p>Availability: <span className='text-blue-500'>in stock</span></p>
        <p className="mb-8 leading-relaxed text-xs mt-8">
          Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
          typewriter affogato, hella selvage wolf narwhal dreamcatcher.
        </p>
        <p> 🔵🟢🟠🟢</p>
        <div className="flex w-full md:justify-start justify-center items-end">
          <div className="relative  lg:w-full xl:w-1/2 w-2/4">
           
             
          <button className="inline-flex text-white text-nowrap bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-8">
          Select Options
          </button>
          </div>
        </div>
        
        
      </div>
    </div>
  <ProductDiscription/>
  
 

<Grid gridCols='md:grid-cols-4' >
{cardOneData.map((card, index) => (
  <Card
    key={index}
    image={card.image}
    title={card.title}
    department={card.department}
    price={card.price}
    discountedPrice={card.discountedPrice}
   
  />
))}
</Grid>

   </div>

  
  )
     
  

}
export default Blog