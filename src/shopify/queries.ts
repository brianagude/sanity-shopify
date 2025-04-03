import { client } from './client';

interface ShopifyImage {
  url: string;
  altText: string | null;
}

interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

interface ShopifyVariant {
  id: string;
  title: string;
  price: ShopifyPrice;
  availableForSale: boolean;
  quantityAvailable: number;
}

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  images: {
    edges: Array<{
      node: ShopifyImage;
    }>;
  };
  variants: {
    edges: Array<{
      node: ShopifyVariant;
    }>;
  };
}

interface ShopifyProductEdge {
  node: Omit<ShopifyProduct, 'description' | 'variants'>;
}

export const getProductByHandle = async (handle: string): Promise<ShopifyProduct> => {
  const query = `
    query ProductQuery($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
              quantityAvailable
            }
          }
        }
      }
    }
  `;

  const { data, errors } = await client.request(query, {
    variables: { handle },
  });

  if (errors) {
    throw new Error(`Failed to fetch product: ${errors}`);
  }

  return data.product;
};

export const getProducts = async (first: number = 10): Promise<ShopifyProductEdge['node'][]> => {
  const query = `
    query ProductsQuery($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data, errors } = await client.request(query, {
    variables: { first },
  });

  if (errors) {
    throw new Error(`Failed to fetch products: ${errors}`);
  }

  return data.products.edges.map((edge: ShopifyProductEdge) => edge.node);
}; 