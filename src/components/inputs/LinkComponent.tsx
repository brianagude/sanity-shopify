// components/inputs/LinkComponent.tsx
import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import type { ExtendedLink } from '@/sanity/lib/typeOverrides'

const resolveHref = (internalPage: ExtendedLink['internalPage']): string => {
  if (!internalPage) return '/'
  const { _type, slug, store } = internalPage
  switch (_type) {
    case 'page':
      return `/${slug?.current || ''}`
    case 'blogPost':
      return `/blog/${slug?.current || ''}`
    case 'product':
      return `/shop/${store?.slug?.current || ''}`
    case 'event':
      return `/events/${slug?.current || ''}`
    default:
      console.warn('Unknown internal link type:', _type)
      return '/'
  }
}


export const LinkComponent = ({
  text,
  url,
  internalPage,
  className,
  _type,
  children,
  style = 'primary',
  size = 'default',
  ...props
}: ExtendedLink & { className?: string }) => {
  const href = url || resolveHref(internalPage)
  const linkText = text || children

  if (!linkText) {
    console.warn('LinkComponent is missing link text or children.')
    return null
  }

  // Check if it's truly external
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  // Define classes
  const buttonBase = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"
  
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    text: "hover:underline",
  }
  
  const sizes = {
    default: "h-10 py-2 px-4",
    small: "h-9 px-3 rounded-md",
    large: "h-11 px-8 rounded-md",
  }

  const combinedClassName =
    _type === 'buttonLink'
      ? clsx(buttonBase, styles[style as keyof typeof styles], sizes[size as keyof typeof sizes], className)
      : clsx("text-primary hover:underline", className)

  // --- Render External Link ---
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        {...props}
      >
        {linkText}
      </a>
    )
  }

  // --- Render Button Fallback if href invalid ---
  if (!href || href === '/' || href === '#') {
    if (_type === 'buttonLink') {
      return (
        <button className={combinedClassName} type="button" disabled {...props}>
          {linkText}
        </button>
      )
    }
    return (
      <span className={combinedClassName} {...props}>
        {linkText}
      </span>
    )
  }

  // --- Render Internal Next.js Link ---
  return (
    <Link href={href} className={combinedClassName} {...props}>
      {linkText}
    </Link>
  )
}

export default LinkComponent
