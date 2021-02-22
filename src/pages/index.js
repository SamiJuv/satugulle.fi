import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"
import LatestBlogPosts from "../components/LatestBlogPosts";

const IndexPage = ({ data }) => {
  const { node: frontPageNode } = data.frontPage.edges[0];
  const blogPosts = data.blogPosts.edges;

  return (
    <Layout titleText={frontPageNode.frontmatter.title} mainImage={frontPageNode.frontmatter?.main_image?.childImageSharp.fluid}>
      <SEO title="Home" description={frontPageNode.frontmatter.description} />
      
      <h1>{frontPageNode.frontmatter.title}</h1>
      
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: frontPageNode.html }}
      />

      <LatestBlogPosts posts={blogPosts} />
    </Layout>
  )
}

export const query = graphql`
  query FrontPageQuery {
    frontPage: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "front_page" }}}
    ) {
      edges {
        node {
          frontmatter{
            title
            description
            main_image {
              childImageSharp {
                fluid(maxWidth: 2200, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog_post" }}}
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            date
            path
            main_image {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          html
        }
      }
    }
  }
`

export default IndexPage
