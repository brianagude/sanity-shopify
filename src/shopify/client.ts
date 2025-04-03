
import {createStorefrontApiClient} from '@shopify/storefront-api-client';
import {storeDomain, publicAccessToken} from './env';

const client = createStorefrontApiClient({
  storeDomain: storeDomain,
  apiVersion: '2024-04',
  publicAccessToken
});

export default client;
