import { defineField, SchemaTypeDefinition } from 'sanity'
import { buttonLink } from '../blocks/buttonLink'
import {TrolleyIcon} from '@sanity/icons'

export const cart: SchemaTypeDefinition = {
  name: 'cart',
  title: 'Cart',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Drawer', value: 'drawer' },
          { title: 'Page', value: 'page' },
          { title: 'Sidebar', value: 'sidebar' },
        ],
      },
      initialValue: 'drawer',
    }),
    defineField({
      name: 'showProductImage',
      title: 'Show Product Image',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showProductTitle',
      title: 'Show Product Title',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showProductPrice',
      title: 'Show Product Price',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showQuantity',
      title: 'Show Quantity',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showVariant',
      title: 'Show Variant',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showSubtotal',
      title: 'Show Subtotal',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showTax',
      title: 'Show Tax',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showShipping',
      title: 'Show Shipping',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showTotal',
      title: 'Show Total',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showDiscount',
      title: 'Show Discount',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showPromoCode',
      title: 'Show Promo Code',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showCheckoutButton',
      title: 'Show Checkout Button',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showContinueShopping',
      title: 'Show Continue Shopping',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showEmptyCartMessage',
      title: 'Show Empty Cart Message',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'emptyCartMessage',
      title: 'Empty Cart Message',
      type: 'blockContent',
      hidden: ({ parent }) => !parent?.showEmptyCartMessage,
    }),
    defineField({
      name: 'showCartCount',
      title: 'Show Cart Count',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'cartCountPosition',
      title: 'Cart Count Position',
      type: 'string',
      options: {
        list: [
          { title: 'Top Right', value: 'topRight' },
          { title: 'Top Left', value: 'topLeft' },
          { title: 'Bottom Right', value: 'bottomRight' },
          { title: 'Bottom Left', value: 'bottomLeft' },
        ],
      },
      initialValue: 'topRight',
      hidden: ({ parent }) => !parent?.showCartCount,
    }),
    defineField({
      name: 'showCartIcon',
      title: 'Show Cart Icon',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'cartIconStyle',
      title: 'Cart Icon Style',
      type: 'string',
      options: {
        list: [
          { title: 'Shopping Cart', value: 'cart' },
          { title: 'Shopping Bag', value: 'bag' },
          { title: 'Basket', value: 'basket' },
        ],
      },
      initialValue: 'cart',
      hidden: ({ parent }) => !parent?.showCartIcon,
    }),
    defineField({
      name: 'checkoutButton',
      title: 'Checkout Button',
      type: 'object',
      fields: buttonLink.fields,
      hidden: ({ parent }) => !parent?.showCheckoutButton,
    }),
    defineField({
      name: 'continueShoppingButton',
      title: 'Continue Shopping Button',
      type: 'object',
      fields: buttonLink.fields,
      hidden: ({ parent }) => !parent?.showContinueShopping,
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'transparent' },
          { title: 'Light Gray', value: 'lightGray' },
          { title: 'Dark Gray', value: 'darkGray' },
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
      },
      initialValue: 'none',
    }),
  ],
  preview: {
    select: {
      layout: 'layout',
    },
    prepare({ layout }) {
      return {
        title: 'Cart',
        subtitle: `${layout} layout`,
      }
    },
  },
}
