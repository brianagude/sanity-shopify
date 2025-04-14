import Image from "next/image";
import { PortableTextComponents } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
// import { typography } from "@/styles/design-tokens";
import { PortableText } from "@portabletext/react";
import type { BlockContent as BlockContentType, EditorialBlockContent as EditorialBlockContentType, SimpleBlockContent as SimpleBlockContentType } from "@/sanity/lib/types";


const blockContentComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6>{children}</h6>
    ),
    // Text styles
    c1: ({ children }) => (
      <p>{children}</p>
    ),
    c2: ({ children }) => (
      <p>{children}</p>
    ),
    large: ({ children }) => (
      <p>{children}</p>
    ),
    normal: ({ children }) => (
      <p>{children}</p>
    ),
    small: ({ children }) => (
      <p>{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-block-list list-disc w-full">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-block-list list-decimal w-full">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="underline hover:italic"
      >
        {children}
      </a>
    ),
    highlightPrimary: ({ children }) => (
      <span className="text-primary">{children}</span>
    ),
    highlightGray: ({ children }) => (
      <span className="text-gray-500">{children}</span>
    ),
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
};

export const BlockContent = ({ value, className }: { value: BlockContentType, className?: string }) => {
  return <div className={`portable-text flex flex-col w-full max-w-4xl ${className}`}><PortableText value={value} components={blockContentComponents} /></div>;
};

export const SimpleBlockContent = ({ value, className }: { value: SimpleBlockContentType, className?: string }) => {
  return <div className={`portable-text flex flex-col w-full max-w-4xl ${className}`}><PortableText value={value} components={blockContentComponents} /></div>;
};


const editorialBlockContentComponents: PortableTextComponents = {
  block: {
    // Heading styles
    h1: ({ children }) => (
      <h1 className={`w-full max-w-7xl px-8 xl:px-[150px]`}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className={`w-full max-w-7xl px-8 xl:px-[150px]`}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className={`w-full max-w-7xl px-8 xl:px-[150px]`}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className={`w-full max-w-7xl px-8 xl:px-[150px]`}>{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className={`w-full max-w-7xl px-8 xl:px-[150px]`}>{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className={`w-full max-w-7xl px-8 xl:px-[150px]`}>{children}</h6>
    ),
    // Text styles
    c1: ({ children }) => (
      <p>{children}</p>
    ),
    c2: ({ children }) => (
      <p>{children}</p>
    ),
    large: ({ children }) => (
      <p>{children}</p>
    ),
    normal: ({ children }) => (
      <p>{children}</p>
    ),
    small: ({ children }) => (
      <p>{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className={`w-full max-w-[1728px] mx-auto px-8 py-10 xl:py-20 xl:px-[150px]`}>
        {children}
      </blockquote>
    ),
    
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <a
          href={value?.href}
          className="underline hover:italic"
        >
          {children}
        </a>
      );
    },
    highlightPrimary: ({ children }) => (
      <span className="text-primary">{children}</span>
    ),
    highlightGray: ({ children }) => (
      <span className="text-gray-500">{children}</span>
    ),
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="text-block-list list-disc w-full max-w-7xl">
        <span>{children}</span>
      </ul>
    ),
    number: ({ children }) => (
      <ol className="text-block-list list-decimal w-full">
        <span>{children}</span>
      </ol>
    ),
  },
  types: {
    image: ({ value }) =>
      value ? (
        <figure className="w-full py-5">
          <Image
            className={` w-full h-auto`}
            src={urlFor(value)
              .width(1728)
              .height(720)
              .quality(80)
              .auto("format")
              .url()}
            alt={value?.alt || "Inline Image"}
            width={1728}
            height={720}
          />
          {value?.caption && (
            <figcaption className={`mt-2 text-center`}>
              {value.caption}
            </figcaption>
          )}
        </figure>
      ) : null,
  },
};

export const EditorialBlockContent = ({ value, className }: { value: EditorialBlockContentType, className?: string }) => {
  return <div className={`portable-textflex flex-col items-end w-full max-w-[1728px] mx-auto ${className}`}><PortableText value={value} components={editorialBlockContentComponents} /></div>;
};
