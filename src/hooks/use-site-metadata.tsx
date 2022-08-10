import { graphql, useStaticQuery } from "gatsby"

export type SiteMetadataProps = {
  author: string
  description: string
  image: string
  keywords: string[]
  language?: string
  siteUrl: string
  title: string
}

type StaticQuery = {
  site: {
    siteMetadata: SiteMetadataProps
  }
}

export const useSiteMetadata = (): SiteMetadataProps => {
  const data = useStaticQuery<StaticQuery>(graphql`
    {
      site {
        siteMetadata {
          author
          description
          image
          keywords
          language
          siteUrl
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}
