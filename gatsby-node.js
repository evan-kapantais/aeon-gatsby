const path = require("path");
const _ = require("lodash");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const newsPostTemplate = path.resolve(`./src/templates/newsPost.js`);

  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(`Error while running gatsby-node query.`);
    return;
  }

  const posts = res.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      component: newsPostTemplate,
      path: `/news/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
