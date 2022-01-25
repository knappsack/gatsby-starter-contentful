import { graphql } from 'gatsby'

export type ContentfulAsset = {
  __typename: string
  sys: {
    id: string
  }
  contentType: string
  description: string
  fileName: string
  height: number
  size: number
  title: string
  url: string
  width: number
}

export const asset = graphql`
  fragment asset on Contentful_Asset {
    __typename
    sys {
      id
    }
    contentType
    description
    fileName
    height
    size
    title
    url
    width
  }
`
