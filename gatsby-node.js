const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const template = path.resolve("./src/components/product.js"); // seu template

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `/products/${node.frontmatter.slug}`, // rota dinâmica
      component: template,
      context: { id: node.id }, // passado para a query do template
    });
  });
};