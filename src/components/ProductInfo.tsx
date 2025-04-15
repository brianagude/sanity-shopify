'use client'

import { useState } from 'react'
import { addToCart } from '@/lib/cart/actions'
import { ImageComponent } from '@/components/ui/Image'
import { SimpleBlockContent } from '@/components/inputs/PortableTextComponents'

type Props = {
  title: string
  description?: any
  featuredImage: any
  shopifyProduct: any
}

export const ProductInfo = ({ title, description, featuredImage, shopifyProduct }: Props) => {
  console.log('Shopify Product:', shopifyProduct)
  const variants = shopifyProduct?.product?.variants?.edges?.map(v => v?.node) || []
  const options = shopifyProduct?.options || []

  console.log('Variants:', variants)

  // Just use the first variant as the default
  const [selectedVariant, setSelectedVariant] = useState(variants[0])

  console.log('Selected Variant:', selectedVariant)

  const hasMultipleVariants = variants.length > 1

  const handleAdd = () => {
    if (!selectedVariant?.id) {
      console.warn('No valid variant')
      return
    }

    addToCart({
      productId: shopifyProduct.id,
      variantId: selectedVariant.id,
      title: shopifyProduct.title || title,
      image: featuredImage?.image?.asset?.url || selectedVariant?.image?.url || '',
      price: parseFloat(selectedVariant?.price?.amount || '0'),
    })
  }

  return (
    <div>
      <h1>{shopifyProduct.title || title}</h1>

      {/* Variant dropdown only if multiple */}
      {hasMultipleVariants && (
        <div className="mb-4">
          <label className="block font-semibold mb-1">Variant</label>
          <select
            value={selectedVariant?.id}
            onChange={e => {
              const variant = variants.find(v => v.id === e.target.value)
              if (variant) setSelectedVariant(variant)
            }}
            className="border rounded px-3 py-2"
          >
            {variants.map(variant => (
              <option key={variant.id} value={variant.id}>
                {variant.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Show price */}
      {selectedVariant?.price?.amount && (
        <p className="text-lg font-medium mb-2">
          ${parseFloat(selectedVariant.price.amount).toFixed(2)}
        </p>
      )}

      {/* Description */}
      {description ? (
        <SimpleBlockContent value={description} />
      ) : shopifyProduct?.description ? (
        <p dangerouslySetInnerHTML={{ __html: shopifyProduct.description }} />
      ) : null}

      <button
        onClick={handleAdd}
        disabled={!selectedVariant?.availableForSale}
        className={`mt-4 px-4 py-2 rounded bg-black text-white disabled:bg-gray-300 cursor-pointer disabled:text-gray-600 disabled:cursor-not-allowed`}
      >
        {selectedVariant?.availableForSale ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  )
}
