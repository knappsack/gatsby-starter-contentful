import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type SeoProps = {
  author: string
  description: string
  image: string
  keywords: string[]
  language?: string
  title: string
  templateTitle: string
  siteUrl: string
}

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
  templateTitle,
  siteUrl,
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
          siteUrl
        }
      }
    }
  `)

  const seoAuthor = author || siteMetadata.author
  const seoDescription = description || siteMetadata.description
  const seoKeywords = keywords || siteMetadata.keywords
  const seoLanguage = language || siteMetadata.language
  const seoTitle = title || siteMetadata.title
  const seoUrl = siteUrl
    ? `${siteMetadata.siteUrl}${siteUrl}`
    : siteMetadata.siteUrl
  const seoImage = image
    ? `${image}?w=1600&h=840&q=90`
    : `${siteMetadata.siteUrl}/${siteMetadata.image}`

  return (
    <Helmet
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${templateTitle}`}
    >
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
        content={seoKeywords ? seoKeywords.join(", ") : undefined}
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
