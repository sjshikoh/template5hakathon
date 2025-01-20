import { groq } from "next-sanity";


export const fullProductList = groq`
*[_type=="product"]{
_id,
title,
description,
quantity,
price,
"image_url":productImage.asset->url,
}
`;

export const productList = groq`
*[_type=="product"][0..7]{
_id,
title,
description,
quantity,
price,
"image_url":productImage.asset->url,
}
`;

export const postQuery = groq`*[_type == "product" && _id == $id][0]{ 
    title, description, "image_url":productImage.asset->url,
  }`;

export const postPathsQuery = groq`*[_type == "product" && defined(_id)][]{
    "params": { "_id": _id }
  }`;
