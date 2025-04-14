import { imageFragment } from "./image";
import { linkFragment } from "./link";

export const heroFragment = `
  content,
  image {
    ${imageFragment}
  },
  overlay,
  ctas[]{
    ${linkFragment}
  },
  layout,
  height
`