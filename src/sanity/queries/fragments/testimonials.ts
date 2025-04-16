import { linkFragment } from "./link";

export const testimonialsFragment = `
  testimonials[]{
    _key,
    author,
    quote
  },
  cta {
    ${linkFragment}
  }
`