import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = Partial<{
  author: string
  description: string
  image: string
  keywords: string[]
  language: string
  title: string
  url: string
}>

type StaticQuery = {
  site: {
    siteMetadata: SeoProps
  }
}

export const Seo = ({
  author,
  description,
  image,
  keywords,
  language,
  title,
  url,
}: SeoProps) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<StaticQuery>(graphql`
    {
      site {
        siteMetadata {
          author
          description
          image
          keywords
          language
          title
          url
        }
      }
    }
  `)

  const seoAuthor = author || siteMetadata.author
  const seoDescription = description || siteMetadata.description
  const seoKeywords = keywords || siteMetadata.keywords
  const seoLanguage = language || siteMetadata.language
  const seoTitle = title || siteMetadata.title
  const seoUrl = url ? `${siteMetadata.url}${url}` : siteMetadata.url
  const seoImage = image
    ? `${image}?w=1600&h=840&q=80`
    : `${siteMetadata.url}/${image}`

  return (
    <Helmet>
      {/* Default / HTML */}
      <html lang={seoLanguage} />
      <title>{seoTitle}</title>
      <link rel="canonical" href={seoUrl} />

      {/* Primary Meta Tags */}
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="image" content={seoImage} />
      <meta
        name="keywords"
        content={seoKeywords ? seoKeywords.join(', ') : null}
      />

      {/* Open Graph / Facebook  */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seoAuthor} />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  )
}
