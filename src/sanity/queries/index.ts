import { defineQuery } from 'groq'
import { heroFragment } from './fragments/hero'
import { featuresFragment } from './fragments/features'
import { featuredItemsFragment } from './fragments/featuredItems'
import { productCarouselFragment } from './fragments/productCarousel'
import { newsletterFragment } from './fragments/newsletter'
import { productDetailsFragment } from './fragments/productDetails'
import { productGridFragment } from './fragments/productGrid'
import { testimonialsFragment } from './fragments/testimonials'
import { seoFragment } from './fragments/seo'
import { imageFragment, lightImageFragment } from './fragments/image'


export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "home"][0]{
    _id,
    _type,
    overview,
    showcaseProjects[]{
      _key,
      ...@->{
        _id,
        _type,
        coverImage,
        overview,
        "slug": slug.current,
        tags,
        title,
      }
    },
    title,
  }
`)

// Product Queries
export const PRODUCT_PAGE_QUERY = defineQuery(`
  *[_type == "product" && store.slug.current == $slug][0]{
    _id,
    _type,
    title,
    description,
    "featuredImage": images[0]{ ${imageFragment} },
    "galleryImages": images[1...10]{ ${lightImageFragment} },
    productDetails[]{
      title,
      text
    },
    store{
      title,
      "slug": slug.current,
      previewImageUrl,
      descriptionHtml,
      gid,
      priceRange{
        minVariantPrice,
        maxVariantPrice
      },
    },
    ${seoFragment},
    pageBuilder[]{
      _key,
      _type,
      ...select(
        _type == "hero" => { ${heroFragment} },
        _type == "features" => { ${featuresFragment} },
        _type == "featuredItems" => { ${featuredItemsFragment} },
        _type == "productCarousel" => { ${productCarouselFragment} },
        _type == "newsletter" => { ${newsletterFragment} },
        _type == "productDetails" => { ${productDetailsFragment} },
        _type == "productGrid" => { ${productGridFragment} },
        _type == "testimonials" => { ${testimonialsFragment} }
      )
    }
  }
`)

export const ALL_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] {
    _id,
    _type,
    title,
    images[]{ ${imageFragment} },
    "slug": store.slug.current,
    store{
      title,
      "slug": slug.current,
      previewImageUrl,
      gid,
      status,
      priceRange{
        minVariantPrice,
        maxVariantPrice
      }
    },
  }
`)

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    "slug": slug.current,
    ${seoFragment},
  }`)

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0]{
    ${seoFragment},
    companyName,
    header {
      logo,
      mainMenu,
      headerButtons
    },
    footer {
      logo,
      logoCaption,
      footerMenu,
      newsletter {
        newsletter {
          title,
          description,
          klaviyoListId
        },
        footerButtons,
        footerText,
      }
    },
    socialMedia {
      facebook,
      instagram,
      twitter,
      linkedin
    }
  }
`)

export const PAGE_SLUGS_QUERY = defineQuery(`
  *[_type == "page" && defined(slug.current)] {
    "slug": slug.current
  }
`)

export const PRODUCT_SLUGS_QUERY = defineQuery(`
  *[_type == "product" && defined(store.slug.current)] {
    "slug": store.slug.current
  }
`)