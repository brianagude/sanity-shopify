import { imageFragment } from "./image";

export const productCarouselFragment = `
  content,
    products[]{
      _id,
      _key,
      title,
      content,
      images[]{
        ${imageFragment}
      },
      slug,
      store {
        status,
        priceRange {
          minVariantPrice,
          maxVariantPrice
        },
        tags
    }
  }
`