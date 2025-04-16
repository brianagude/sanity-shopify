import { imageFragment } from "./image";
import { linkFragment } from "./link";

export const productDetailsFragment = `
  cta {
    ${linkFragment}
  },
  product->{
    _id,
    _key,
    title,
    content,
    images[]{
      ${imageFragment}
    },
    slug,
    store
  }
`