type CreateLinkProps = {
  page: {
    slug: string
  }
  url: string
  query: string
  anchor: string
}

export const createLink = ({ page, url, query, anchor }: CreateLinkProps) => {
  const path = page?.slug || url
  const queryString = query && `?` + query
  const anchorHash = anchor && `#` + anchor

  return (
    path + (queryString ? queryString : "") + (anchorHash ? anchorHash : "")
  )
}
