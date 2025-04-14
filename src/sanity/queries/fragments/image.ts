export const imageFragment = `
  alt,
  _key,
  asset->{
    _id,
    _type,
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
`

export const lightImageFragment = `
  asset->{
    _id,
    url
  },
  alt
`