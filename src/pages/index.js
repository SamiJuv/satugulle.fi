import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];

  return (
    <Layout mainImage={node.frontmatter?.main_image?.childImageSharp.fluid}>
      <SEO title="Home" description={node.frontmatter.description} />
      
      <h1>{node.frontmatter.title}</h1>
      
      <div
        className="page-content"
        dangerouslySetInnerHTML={{ __html: node.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query FrontPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "front_page" }}}
    ) {
      edges{
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
  }
`

export default IndexPage
