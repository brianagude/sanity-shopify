import { imageFragment } from "./image";

export const featuredItemsFragment = `
  content,
  items[]{
    title,
    description,
    image {
      ${imageFragment}
    },
    item->{
      _id,
      _type,
      title,
      slug
    },
    ctaText
  }
`