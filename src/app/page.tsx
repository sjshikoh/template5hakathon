import React from "react";
import Image from "next/image";
import Carosel from "@/components/carosel";
import InnerCarosel from "@/components/inner-carrosel";

import Products from "@/components/posts";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productList } from "@/sanity/lib/queries";

export default async function Home() {
  const products = await sanityFetch<SanityDocument[]>({ query: productList });
  return (
    <div>
      <Carosel />
      <div className="wrapper mt-[60px]">
        {/* Text Content */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#252B42] mb-2">
            EDITOR’S PICK
          </h1>
          <p className="text-base text-[#737373] font-semibold">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex mt-[60px] justify-center gap-4">
          <div className="relative w-[325px] h-[500px] md:w-[325px] md:h-[500px]">
            <Image
              src={"/c0357746eb27e42fff6279478e2c8a48.jpg"}
              alt="logo"
              fill
            />
          </div>
          <div className="relative w-[325px] h-[500px] md:w-[325px] md:h-[500px]">
            <Image src={"/WOMANGRAYJACKET.jpg"} alt="logo" fill />
          </div>
          <div>
            <div className="relative w-[325px] h-[500px] md:w-[325px] md:h-[240px]">
              <Image src={"/accessories.jpg"} alt="logo" fill />
            </div>
            <div className="h-[20px]"></div>
            <div className="relative w-[325px] h-[240px] md:w-[325px] md:h-[240px]">
              <Image src={"/kids.jpg"} alt="logo" fill />
            </div>
          </div>
        </div>

        {/* Next section */}

        {/* Test */}
        <div className="wrapper mt-60 px-10">
          {/* Product Grid */}
          <Products products={products} />
        </div>
        {/* green */}
        {/* <div
        className="wrapper h-[753px] md:h-[716px] mt-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/shop-hero-1-product-slide-1-1.jpg')" }}
      >
        <div className="wrapper absolute inset-0 mt-[20%] text-white px-4 md:px-10 text-center md:text-left">
          <div className="mb-6">
            <h5 className="text-lg md:text-xl font-semibold uppercase">
              SUMMER 2020
            </h5>
          </div>
          <div className="mb-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Vita Classic Product
            </h1>
            <p className="mt-4 text-sm md:text-base leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </p>
          </div>
          <button className="px-6 py-3 md:px-8 md:py-4 w-auto bg-[#2DC071] text-white font-medium text-sm md:text-base rounded-md hover:bg-[#28a05e] transition">
            SHOP NOW
          </button>
        </div>
      </div> */}
        <InnerCarosel />
        {/* carosel 2 */}
        <div className=" flex flex-col md:flex-row items-center justify-center text-gray-700 text-center mt-24 px-4 md:px-10">
          <div className="w-full xl:w-[270px] h-[250px] mr-24">
            <Image
              src={"/asianwoman.png"}
              alt="asian"
              width={386}
              height={300}
            />
          </div>
          <div className="mb-10">
            <h5 className="text-lg md:text-xl font-semibold uppercase tracking-wide">
              SUMMER 2020
            </h5>
            <h1 className="w-full md:max-w-[387px] text-2xl md:text-4xl font-bold leading-tight">
              Part of the Neural Universe
            </h1>
            <p className="w-full md:max-w-[387px] mt-4 text-sm md:text-base leading-relaxed">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="px-6 py-3 md:px-8 md:py-4 w-auto bg-[#2DC071] text-white font-medium text-sm md:text-base rounded-md hover:bg-[#28a05e] transition">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* featured Posts */}
        <div className="mt-10 mb-6 text-center">
          <h5 className="text-[#23A6F0] text-sm font-bold">Practice Advice</h5>
          <h1 className="text-2xl md:text-3xl font-bold text-[#252B42] mb-2">
            Featured Posts
          </h1>
          <p className="text-base text-[#737373] font-semibold">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="wrapper flex flex-wrap mt-[60px] justify-center gap-4">
          <div className="relative h-[300px] w-full md:w-auto md:h-[300px]"></div>

          <Image
            src={"/car.jpg"}
            alt="car"
            width={300}
            height={300}
            className="object-cover rounded-lg w-full sm:w-[300px]"
          />
          <Image
            src={"/street.jpg"}
            alt="street"
            width={300}
            height={300}
            className="object-cover rounded-lg w-full sm:w-[300px]"
          />
          <Image
            src={"/umbrella.jpg"}
            alt="umbrella"
            width={300}
            height={200}
            className="object-cover rounded-lg w-full sm:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
}
