/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CellStore`,
    siteUrl: `https://filelib.netlify.app`
  },
  plugins: [
    "gatsby-plugin-mdx",
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