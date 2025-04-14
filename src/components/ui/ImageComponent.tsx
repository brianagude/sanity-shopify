// components/ui/Image.tsx

import Image from 'next/image'
import { clsx } from 'clsx'
import { ExtendedImageComponent } from '@/sanity/lib/typeOverrides'
import { urlFor } from '@/sanity/lib/image'

export const ImageComponent = ({
  image,
  aspectRatio = 'auto',
  objectFit = 'contain',
  className,
  ...props
}: ExtendedImageComponent) => {
  if (!image?.asset?.url) return null

  const { metadata } = image.asset
  const blurDataURL = metadata?.lqip
  const width = metadata?.dimensions?.width || 800
  const height = metadata?.dimensions?.height || 600
  const alt = image?.alt || 'Image'

  const aspectClasses = {
    '1:1': 'aspect-square',
    '4:5': 'aspect-[4/5]',
    '3:4': 'aspect-[3/4]',
    '5:4': 'aspect-[5/4]',
  }

  return (
    <figure
      className={clsx(
        'relative w-full overflow-hidden',
        aspectRatio !== 'auto' && aspectClasses[aspectRatio],
        className
      )}
      style={{
        backgroundColor: metadata?.palette?.dominant?.background || '#f3f3f3'
      }}
    >
      <Image
        src={urlFor(image).format("webp").url()}
        alt={alt || "Missing alt text"}
        fill={aspectRatio !== 'auto'}
        width={aspectRatio === 'auto' ? width : undefined}
        height={aspectRatio === 'auto' ? height : undefined}
        className={clsx(
          'object-center',
          objectFit === 'cover' && 'object-cover',
          objectFit === 'contain' && 'object-contain',
          objectFit === 'fill' && 'object-fill',
        )}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={image.priority}
        {...props}
      />
      {/* Optional Caption */}
      {image.caption && (
        <figcaption>
          {image.caption}
        </figcaption>
      )}
    </figure>
  )
}
