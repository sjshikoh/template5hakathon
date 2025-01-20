import { product } from "@/sanity/schemaTypes/product";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";

const Products = ({ products = [] }: { products: SanityDocument[] }) => {
  const numberOfProducts =
    products.length === 1 ? `1 post` : `${products.length} posts`;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <Link href={product._id}>
          <div key={product._id}>
            <div className="relative w-full h-[427px]">
              <Image
                src={product.image_url}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Info */}
            <h1 className="text-lg text-center font-bold text-[#252B42] mt-4">
              {product.title}
            </h1>
            <h2 className="text-sm text-center font-bold text-[#737373] mb-2">
              English Department
            </h2>

            {/* Price Section */}
            <div className="flex justify-center items-center mb-2">
              <h2 className="text-sm font-bold text-[#BDBDBD] line-through">
                $16.48
              </h2>
              <div className="w-[5px]"></div>
              <h2 className="text-sm font-bold text-[#23856D]">
                {product.price}
              </h2>
            </div>

            {/* Color Indicators */}
            <div className="flex justify-center gap-2">
              {[
                "/Ellipse 14.png",
                "/Ellipse 15.png",
                "/Ellipse 16.png",
                "/Ellipse 17.png",
              ].map((ellipse, idx) => (
                <div key={idx} className="relative w-[10px] h-[10px]">
                  <Image
                    src={ellipse}
                    alt={`color indicator ${idx + 1}`}
                    fill
                  />
                </div>
              ))}
            </div>
          </div></Link>
        ))}
    </div>
  );
};

export default Products;
