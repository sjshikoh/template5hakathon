import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { fullProductList } from "@/sanity/lib/queries";
import { SanityDocument } from "@sanity/client";
import ShopContent from "@/components/ShopComponent";

export default async function Shop() {
  const posts = await sanityFetch<SanityDocument[]>({ query: fullProductList });
  return <ShopContent posts={posts} />;
}
