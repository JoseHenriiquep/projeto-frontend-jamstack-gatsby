/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CellStore`,
    siteUrl: `https://cell-store-gatsby.netlify.app/`
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages`
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "components",
        "path": "./src/components/"
      },
      __key: "components"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "products",
        "path": `${__dirname}/products`
      },
      __key: "products"
    },
    
  ]
};