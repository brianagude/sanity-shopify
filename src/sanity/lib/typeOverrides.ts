import type {
  ImageComponent,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  // Import base link types and referenced document types
  SimpleLink as SimpleLinkBase,
  ButtonLink as ButtonLinkBase,
  Page,
  BlogPost,
  Event,
  Product,
  Slug,
} from "./types";

export type ExtendedImageComponent = Omit<ImageComponent, "image"> & {
  className?: string;
  image?: {
    asset?: SanityImageAsset;
    media?: unknown;
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    priority?: boolean;
    caption?: string;
    _type: "image";
  };
};

// Represents the resolved internal link with necessary fields for URL generation
type ResolvedInternalLink = (
  | Pick<Page, "_type" | "slug">
  | Pick<BlogPost, "_type" | "slug">
  | Pick<Event, "_type" | "_id"> // Event uses _id for routing, not slug
  | (Pick<Product, "_type"> & { store?: { slug?: Slug | undefined } }) // Product uses store.slug
) & {
  slug?: Slug | undefined; // Common field for page/blog
  _id?: string; // Field for event
  store?: { slug?: Slug | undefined }; // Field for product
};

// Base properties common to both link types
type BaseLinkProps = {
  text?: string;
  url?: string;
  // Use the resolved type here for component consumption
  internalPage?: ResolvedInternalLink;
  children?: React.ReactNode;
  style?: string;
  size?: string;
};

// Discriminated union for the LinkComponent props
export type ExtendedLink =
  | (Omit<SimpleLinkBase, "internalPage"> &
      BaseLinkProps & { _type: "simpleLink" })
  | (Omit<ButtonLinkBase, "internalPage"> &
      BaseLinkProps & { _type: "buttonLink" });
