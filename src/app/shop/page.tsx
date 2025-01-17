import React from "react";
import Grid from '@/components/Grid';
import Card from "@/components/Card"; // Adjust the import path to your actual structure
import Minbar from "@/components/minbar";
import Titlebar from "@/components/Titlebar";
import Image from "next/image";

const cardTwoData = [
{
   image: "/card-item.png" 
},
{
  image: "/col-md-4.png",
},
{
  image: "/col-md-4 (1).png",
},
{
  image: "/col-md-4 (2).png",
},
{
  image: "/col-md-4 (3).png",
},
]
const cardOneData = [
  {
    image: "/c0357746eb27e42fff6279478e2c8a48.jpg",
    title: "Graphic Design",
    department: "English Department",
    price: "$16.48",
    discountedPrice: "$6.48",
    rating: "🔵🟢🟠🟢"
  },
  {
    image: "/WOMANGRAYJACKET.jpg",
    title: "Fashion Design",
    department: "Art Department",
    price: "$20.00",
    discountedPrice: "$15.00",
    rating: "🔵🟢🟠🟢"
  },
  {
    image: "/fixed-height (9).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
  {
    image: "/kids.jpg",
    title: "Kids Collection",
    department: "Childcare",
    price: "$10.00",
    discountedPrice: "$5.00",
    rating: "🔵🟢🟠🟢"
  },
  
 {
    image: "/fixed-height.png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (1).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (2).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (3).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (4).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (5).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (6).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
 {
    image: "/fixed-height (8).png",
    title: "Graphic Design",
    department: "English Department",
    price: "$25.00",
    discountedPrice: "$18.00",
    rating: "🔵🟢🟠🟢"
  },
 
  
];

const Shop = () => {

  return (
    <div className="wrapper w-full my-6  ">
      <div className="flex flex-col items-center md:flex-row justify-between">

      <h1 className="text-3xl font-bold text-center mb-6">Shop</h1>
      <div className="flex space-x-2">
        <div>Home</div>
        {/* <div><Image src="/Vector (13).png" alt="" width={7} height={12} /></div> */}
        <div>Shop</div>
      </div>
      </div>
      

      
        <Grid gridCols="md:grid-cols-5">
          {cardTwoData.map((card,index) => (
            <Card
              key={index}
              image={card.image}
             showText={false}
            />
          ))}
        </Grid>
      
      
      

      <Minbar />
    
      <Titlebar />
        

      <Grid gridCols='md:grid-cols-4' >
        {cardOneData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            department={card.department}
            price={card.price}
            discountedPrice={card.discountedPrice}
            rating={card.rating} // Enable ratings
          />
        ))}
      </Grid>
    </div>
  );
};

export default Shop;