import { imageFragment } from "./image";
import { linkFragment } from "./link";

export const featuresFragment = `
  content,
  features[]{
    title,
    description,
    icon,
    image {
      ${imageFragment}
    }
  },
  cta {
    ${linkFragment}
  },
  layout,
  columns,
  background
`