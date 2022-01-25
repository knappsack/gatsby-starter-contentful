import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type SeoProps = {
  /** A custom HTML title that overwrites the default title */
  customTitle?: string
  /** A custom page, global or meta description that overwrites the default description */
  customDescription?: string
  /** A custom page, global or meta keywords that overwrites the default keywords */
  customKeywords?: string | string[]
  /** A custom page, global or meta url that overwrites the default url */
  customUrl?: string
  /** A custom open graph image that overwrites the default image */
  customImage?: string
}

export const Seo = ({
  customTitle,
  customDescription,
  customKeywords,
  customUrl,
  customImage,
}: SeoProps) => {
  const {
    site: {
      siteMetadata: { url, title, image, description, language, keywords },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          url
          title
          image
          description
          language
          keywords
        }
      }
    }
  `)

  const seoTitle = customTitle || title
  const seoDescription = customDescription || description
  const seoKeywords = customKeywords || keywords
  const seoUrl = customUrl ? `${url}${customUrl}` : url
  const seoImage = customImage ? `${customImage}?w=1600&h=840&q=80` : `${url}/${image}`

  return (
    <Helmet>
      {/* Default / HTML */}
      <html lang={language} />
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
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  )
}
