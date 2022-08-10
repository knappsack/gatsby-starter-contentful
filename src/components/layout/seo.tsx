import * as React from "react"

import { useSiteMetadata } from "../../hooks/use-site-metadata"
import type { SiteMetadataProps } from "../../hooks/use-site-metadata"

type SeoProps = {
  siteTitle: string
  children?: React.ReactNode
} & SiteMetadataProps

export const Seo = ({
  author,
  children,
  description,
  image,
  keywords,
  siteTitle,
  siteUrl,
  title,
}: SeoProps) => {
  const {
    author: defaultAuthor,
    description: defaultDescription,
    image: defaultImage,
    keywords: defaultKeywords,
    // language: defaultLanguage,
    siteUrl: defaultSiteUrl,
    title: defaultTitle,
  } = useSiteMetadata()

  const seo = {
    author: author.trim() || defaultAuthor,
    description: description.trim() || defaultDescription,
    keywords: keywords || defaultKeywords,
    title: title.trim() || defaultTitle,
    image: image
      ? `${image}?w=1600&h=840&q=90`
      : `${defaultSiteUrl}/${defaultImage}`,
    url: siteUrl ? `${defaultSiteUrl}${siteUrl}` : defaultSiteUrl,
  }

  return (
    <React.Fragment>
      <title>
        {seo.title}
        {siteTitle && ` | ${siteTitle}`}
      </title>
      <link rel="canonical" href={seo.url} />

      {/* Primary Meta Tags */}
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta
        name="keywords"
        content={seo.keywords ? seo.keywords.join(", ") : undefined}
      />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </React.Fragment>
  )
}
