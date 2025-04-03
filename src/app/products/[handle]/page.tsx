import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProductByHandle } from '@/shopify/queries';
import Loading from '@/components/Loading';
import { Suspense } from 'react';

async function ProductDetails({ handle }: { handle: string }) {
  const product = await getProductByHandle(handle);

  if (!product) {
    notFound();
  }

  const firstImage = product.images.edges[0]?.node;
  const price = product.priceRange.minVariantPrice;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
          {firstImage && (
            <Image
              src={firstImage.url}
              alt={firstImage.altText || product.title}
              width={800}
              height={800}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold mb-4">
            {price.currencyCode} {price.amount}
          </p>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.description }} />
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Variants</h2>
            <div className="grid grid-cols-2 gap-4">
              {product.variants.edges.map(({ node: variant }) => (
                <div key={variant.id} className="border rounded-lg p-4">
                  <h3 className="font-medium">{variant.title}</h3>
                  <p className="text-lg">
                    {variant.price.currencyCode} {variant.price.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage({ params }: { params: { handle: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails handle={params.handle} />
    </Suspense>
  );
} 