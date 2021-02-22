const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const basicPageTemplatePath = path.resolve(`src/templates/basic-page.js`);
  const blogPostTemplatePath = path.resolve(`src/templates/blog-post.js`);
  const customerFeedbackTemplatePath = path.resolve(`src/templates/customer-feedback.js`);

  const basicPages = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "basic_page" }}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const blogPosts = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "blog_post" }}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const customerFeedbacks = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "customer_feedback" }}}
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (basicPages.errors || customerFeedbacks.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  basicPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: basicPageTemplatePath,
      context: {}
    });
  });

  blogPosts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplatePath,
      context: {}
    });
  });

  customerFeedbacks.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: customerFeedbackTemplatePath,
      context: {}
    });
  });
}