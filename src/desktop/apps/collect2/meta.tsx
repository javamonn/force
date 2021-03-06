import React, { Fragment } from "react"

interface Props {
  appUrl: string
}

export const Meta = (props: Props) => {
  const { appUrl } = props
  // TODO: custom page title / description based on params
  const title = "Collect | Artsy"
  const description =
    "Find artworks by subject matter, style/technique, movement, price, and gallery/institution."

  return (
    <Fragment>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />
      <meta property="og:url" content={`${appUrl}/collect`} />
      <meta property="og:image" content={`${appUrl}/images/og_image.jpg`} />
      <meta property="og:type" content="website" />
      <meta property="twitter:card" content="summary" />
    </Fragment>
  )
}
