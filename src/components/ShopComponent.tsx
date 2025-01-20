"use client";

import React, { useState } from "react";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Search from "@/components/search";
import { SanityDocument } from "@sanity/client";
import Link from "next/link";

interface ShopContentProps {
  posts: SanityDocument[];
}

const ShopContent: React.FC<ShopContentProps> = ({ posts }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Link href={post._id} key={post._id}>
              <Card
                // key={post._id}
                image={post.image_url} // Adjust to match your Sanity schema
                title={post.title}
                price={post.price}
                discountedPrice={post.price}
              />
            </Link>
          ))
        ) : (
          <div className="text-center col-span-4">
            <p className="text-gray-500">
              No results found for "{searchQuery}"
            </p>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default ShopContent;
