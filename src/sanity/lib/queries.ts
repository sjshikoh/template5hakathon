import { groq } from "next-sanity";

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