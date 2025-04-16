import { imageFragment } from "./image";
import { linkFragment } from "./link";

export const productGridFragment = `
  collection->{
    _id,
    title,
    slug
  },
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
  },
  cta {
    ${linkFragment}
  }
`