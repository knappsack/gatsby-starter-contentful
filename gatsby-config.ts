import type { GatsbyConfig } from "gatsby"
import * as dotenv from "dotenv"

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    author: "@thijskrooswijk",
    description:
      "Blazing fast modern site generator for React Go beyond static sites: build blogs, e-commerce sites, full-blown apps, and more with Gatsby",
    image: "og-image.jpg",
    keywords: ["knappsack", "gatsby", "contentful"],
    language: "en-us",
    repo: "https://github.com/knappsack/gatsby-contentful-starter",
    siteUrl: "https://www.knappsack.org",
    title: "Gatsby Contentful starter",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#1d1d1f",
        display: "standalone",
        icon: "static/favicon.png",
        include_favicon: true,
        name: "Knappsack starter",
        short_name: "starter",
        start_url: "/",
        theme_color: "#1d1d1f",
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          quality: 90,
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Contentful",
        fieldName: "contentful",
        url: process.env.CONTENTFUL_GRAPHQL_ENDPOINT,
        headers: {
          Authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_TOKEN}`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "G-XXXXXXXXXX",
      },
    },
    "gatsby-plugin-offline",
  ],
}

export default config
