// components/ui/button.ts

import { tv } from 'tailwind-variants'
import { buttonBase, buttonStyles, buttonSizes } from '@/styles/design-tokens'

export const buttonVariants = tv({
  base: buttonBase,
  variants: {
    variant: buttonStyles,
    size: buttonSizes,
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})
