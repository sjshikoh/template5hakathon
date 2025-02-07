"use client";

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";

import Image from "next/image";


const Post = ({ post }: { post: SanityDocument }) => {
  return (
    <main className="">
      <h1>{post.title}</h1>
      <Image src={post.image_url} height={300} width={300} alt={post.title} />
      {post?.body ? <PortableText value={post.body} /> : null}
    </main>
  );
};

export default Post;
