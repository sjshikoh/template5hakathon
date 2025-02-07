"use client";

import React, { useState } from "react";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Search from "@/components/search";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

interface ShopContentProps {
  posts: SanityDocument[];
}

const POSTS_PER_PAGE = 8;

const ShopContent: React.FC<ShopContentProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { addToCart } = useCart();

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="wrapper w-full my-6">
      <div className="flex flex-col items-center md:flex-row justify-between">
        <h1 className="text-3xl font-bold text-center mb-6">Shop</h1>
        <div className="flex space-x-2">
          <div>Home</div>
          <div>Shop</div>
        </div>
      </div>

      <div className="mb-6">
        <Search onSearch={setSearchQuery} />
      </div>

      <Grid gridCols="md:grid-cols-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <div key={post._id} className="relative">
              <Link href={post._id}>
                <Card
                  image={post.image_url}
                  title={post.title}
                  price={post.price}
                  discountedPrice={post.price}
                />
              </Link>
              <button
                className="absolute bottom-2 right-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() =>
                  addToCart({
                    _id: post._id,
                    name: post.title,
                    price: post.price,
                    quantity: 1,
                    image: post.image_url, // Include image if available
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <div className="text-center col-span-4">
            <p className="text-gray-500">
              No results found.
            </p>
          </div>
        )}
      </Grid>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded-l"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-white rounded-r"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ShopContent;
