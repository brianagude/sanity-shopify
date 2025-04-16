// /styles/design-tokens.ts
export const buttonBase = `
  inline-flex items-center justify-center rounded-md text-sm font-medium
  transition-colors focus-visible:outline-none focus-visible:ring-2 
  focus-visible:ring-ring focus-visible:ring-offset-2 
  disabled:opacity-50 disabled:pointer-events-none ring-offset-background
`.trim()

export const buttonStyles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  text: "hover:underline",
}

export const buttonSizes = {
  default: "h-10 py-2 px-4",
  small: "h-9 px-3 rounded-md",
  large: "h-11 px-8 rounded-md",
}