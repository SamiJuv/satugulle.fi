import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { node } = data.allMarkdownRemark.edges[0];

  return (
    <Layout>
      <SEO title="Home" description={node.frontmatter.description} />
      <Link to="/valmentaja">Valmentaja</Link>
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
          }
          html
        }
      }
    }
  }
`

export default IndexPage
