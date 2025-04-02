import { defineField, SchemaTypeDefinition } from 'sanity'
import { buttonLink } from '../blocks/buttonLink'
import {BillIcon} from '@sanity/icons'

export const checkout: SchemaTypeDefinition = {
  name: 'checkout',
  title: 'Checkout',
  type: 'document',
  icon: BillIcon,
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'Split', value: 'split' },
          { title: 'Compact', value: 'compact' },
        ],
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'steps',
      title: 'Checkout Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'Step Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'User', value: 'user' },
                  { title: 'Location', value: 'location' },
                  { title: 'Credit Card', value: 'credit-card' },
                  { title: 'Check', value: 'check' },
                ],
              },
            },
          ],
        },
      ],
      initialValue: [
        { title: 'Contact Information', description: 'Enter your contact details', icon: 'user' },
        { title: 'Shipping', description: 'Choose your shipping method', icon: 'location' },
        { title: 'Payment', description: 'Enter your payment details', icon: 'credit-card' },
        { title: 'Review', description: 'Review your order', icon: 'check' },
      ],
    }),
    defineField({
      name: 'showOrderSummary',
      title: 'Show Order Summary',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showShippingOptions',
      title: 'Show Shipping Options',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showPaymentMethods',
      title: 'Show Payment Methods',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'paymentMethods',
      title: 'Payment Methods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Method Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Method Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Method Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Credit Card', value: 'credit-card' },
                  { title: 'PayPal', value: 'paypal' },
                  { title: 'Apple Pay', value: 'apple-pay' },
                  { title: 'Google Pay', value: 'google-pay' },
                ],
              },
            },
            {
              name: 'enabled',
              title: 'Enabled',
              type: 'boolean',
              initialValue: true,
            },
          ],
        },
      ],
      initialValue: [
        { title: 'Credit Card', value: 'credit-card', icon: 'credit-card', enabled: true },
        { title: 'PayPal', value: 'paypal', icon: 'paypal', enabled: true },
        { title: 'Apple Pay', value: 'apple-pay', icon: 'apple-pay', enabled: true },
        { title: 'Google Pay', value: 'google-pay', icon: 'google-pay', enabled: true },
      ],
      hidden: ({ parent }) => !parent?.showPaymentMethods,
    }),
    defineField({
      name: 'showAddressForm',
      title: 'Show Address Form',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showGiftOptions',
      title: 'Show Gift Options',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showOrderNotes',
      title: 'Show Order Notes',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showDiscountCode',
      title: 'Show Discount Code',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showSaveAddress',
      title: 'Show Save Address',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showTerms',
      title: 'Show Terms',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'termsText',
      title: 'Terms Text',
      type: 'text',
      rows: 2,
      initialValue: 'By placing your order, you agree to our Terms of Service and Privacy Policy.',
      hidden: ({ parent }) => !parent?.showTerms,
    }),
    defineField({
      name: 'termsLink',
      title: 'Terms Link',
      type: 'string',
      initialValue: '/terms',
      hidden: ({ parent }) => !parent?.showTerms,
    }),
    defineField({
      name: 'showPrivacyPolicy',
      title: 'Show Privacy Policy',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'privacyPolicyText',
      title: 'Privacy Policy Text',
      type: 'text',
      rows: 2,
      initialValue: 'We respect your privacy. Read our Privacy Policy.',
      hidden: ({ parent }) => !parent?.showPrivacyPolicy,
    }),
    defineField({
      name: 'privacyPolicyLink',
      title: 'Privacy Policy Link',
      type: 'string',
      initialValue: '/privacy-policy',
      hidden: ({ parent }) => !parent?.showPrivacyPolicy,
    }),
    defineField({
      name: 'showOrderConfirmation',
      title: 'Show Order Confirmation',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'orderConfirmationText',
      title: 'Order Confirmation Text',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you for your order! We\'ll send you a confirmation email shortly.',
      hidden: ({ parent }) => !parent?.showOrderConfirmation,
    }),
    defineField({
      name: 'showOrderNumber',
      title: 'Show Order Number',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showOrderDetails',
      title: 'Show Order Details',
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
        title: 'Checkout',
        subtitle: `${layout} layout`,
      }
    },
  },
}
