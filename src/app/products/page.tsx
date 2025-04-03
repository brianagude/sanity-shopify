import { Suspense } from 'react';
import { getProducts } from '@/shopify/queries';
import ProductCard from '@/components/ProductCard';
import Loading from '@/components/Loading';

async function ProductsList() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <Suspense fallback={<Loading />}>
        <ProductsList />
      </Suspense>
    </div>
  );
} 