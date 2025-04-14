export const imageFragment = `
  asset->{
    _id,
    _type,
    url,
    metadata {
      lqip,
      dimensions {
        width,
        height
      },
      palette {
        dominant {
          background,
          foreground,
          population,
          title
        }
      }
    }
  },
  hotspot {
    x,
    y,
    height,
    width
  },
  crop {
    top,
    bottom,
    left,
    right
  },
  alt,
  priority,
  caption,
  _type,
  aspectRatio,
  objectFit
`

export const lightImageFragment = `
  asset->{
    _id,
    url
  },
  alt
`