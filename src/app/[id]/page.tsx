import { SanityDocument } from "@sanity/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

import ProductDiscription from "@/components/product-discription";

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

const PostPage = async ({ params }: { params: undefined }) => {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  console.log(post);
  return (
    <div>
      <div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={post.image_url}
              width={506}
              height={450}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h5 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {post.title}
            </h5>
            <p className="text-xs my-2">⭐⭐⭐⭐⭐ 10 reviews</p>
            <h4 className="text-black font-bold text-xs mb-2">$1,139.33</h4>
            <p>
              Availability: <span className="text-blue-500">in stock</span>
            </p>
            <p className="mb-8 leading-relaxed text-xs mt-8">
              {post.description}              
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
      </div>
      <ProductDiscription />
    </div>
  );
};

export default PostPage;
