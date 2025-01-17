import React from "react";
import Image from "next/image";

const ProductDiscription = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto ">
        <div className="text-center mb-10 font-medium ">
          <span className="mr-6">Description</span>
          <span className="mr-6">Aditional Information</span>
          <span>Reviews</span>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <Image
                src="/card-item (2).png"
                alt="card item"
                width={337}
                height={392}
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                The Catalyzer
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.<br/>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Neptune
              </h2>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                banh mi pug VHS try-hard ugh iceland kickstarter tumblr
                live-edge tilde.<br/>
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine, ramps microdosing
                live-edge.

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDiscription;