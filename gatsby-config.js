require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    url: 'https://www.knappsack.org',
    title: "Gatsby Contentful starter",
    image: 'og-image.jpg',
    description:
      'Blazing fast modern site generator for React Go beyond static sites: build blogs, e-commerce sites, full-blown apps, and more with Gatsby',
    language: 'en-us',
    keywords: ['knappsack', 'gatsby', 'contentful'],
    repo: 'https://github.com/knappsack/gatsby-contentful-starter',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        background_color: '#1d1d1f',
        display: 'standalone',
        icon: 'static/images/favicon.png',
        include_favicon: true,
        name: 'Knappsack starter',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#1d1d1f',
      },
    },
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Contentful`,
        fieldName: `contentful`,
        url: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-8M97W0P504`,
      },
    },
  ],
}
