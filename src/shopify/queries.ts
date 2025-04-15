export const PRODUCT_BY_ID_QUERY = `
  query ProductById($id: ID!) {
    product(id: $id) {
      id
      title
      handle
      description
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            quantityAvailable
            sku
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
            }
            selectedOptions {
              name
              value
            }
            image {
              url
              altText
            }
          }
        }
      }
    }
  }
`
