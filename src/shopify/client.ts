import { createStorefrontApiClient } from '@shopify/storefront-api-client';
import { storeDomain, publicAccessToken, apiVersion } from './env';

export const client = createStorefrontApiClient({
  storeDomain,
  apiVersion,
  publicAccessToken,
});

export default client; 