import { defineQuery } from 'groq'

const imageFragment = `
  asset->{
    _id,
    _type,
    url,
    metadata {
      lqip,
      dimensions {
        width,
        height
      },
      palette {
        dominant {
          background,
          foreground,
          population,
          title
        }
      }
    }
  },
  hotspot {
    x,
    y,
    height,
    width
  },
  crop {
    top,
    bottom,
    left,
    right
  },
  alt,
  priority,
  caption,
  _type,
  aspectRatio,
  objectFit
`


const linkFragment = `
  text,
  url,
  internalPage->{
    _id,
    _type,
    title,
    slug
  },
  style,
  size
`

const reusableContentFragment = `
  _type,
  _key,
  _type == "hero" => {
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
  },
  _type == "features" => {
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
  },
  _type == "featuredItems" => {
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
  },
  _type == "productCarousel" => {
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
  },
  _type == "newsletter" => {
    _type,
    _key
  },
  _type == "productDetails" => {
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
  },
  _type == "productGrid" => {
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
  },
  _type == "testimonials" => {
    testimonials[]{
      _key,
      author,
      quote
    },
    cta {
      ${linkFragment}
    }
  }
`


// Product Queries
export const PRODUCT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "product" && store.slug.current == $slug][0]{
    _id,
    _type,
    title,
    store,
    images[]{
      ${imageFragment}
    },
    seo {
      title,
      description,
      image{
        ${imageFragment}
      },
    },
    pageBuilder[]{
      ${reusableContentFragment}
    },
    ...
  }
`)
