// components/ui/Image.tsx

'use client'

import Image from 'next/image'
import { clsx } from 'clsx'
import { ExtendedImageComponent } from '@/sanity/lib/typeOverrides'
import { urlFor } from '@/sanity/lib/image'

export const ImageComponent = ({
  image,
  className,
  priority = false,
  width: propWidth,
  height: propHeight,
  ...props
}: ExtendedImageComponent & {
  priority?: boolean
  width?: number
  height?: number
}) => {
  if (!image?.asset?.url) return null

  const { metadata } = image.asset

  const blurDataURL = metadata?.lqip
  const width = propWidth || metadata?.dimensions?.width || 800
  const height = propHeight || metadata?.dimensions?.height || 600
  const alt = image?.alt || 'Image'
  const backgroundColor = metadata?.palette?.dominant?.background || '#f3f3f3'

  return (
    <figure
      className={clsx(
        'relative w-full overflow-hidden',
        className
      )}
      style={{ backgroundColor }}
    >
      <Image
        src={urlFor(image).format('webp').quality(80).url()}
        alt={alt}
        width={width}
        height={height}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        {...props}
      />
    </figure>
  )
}
