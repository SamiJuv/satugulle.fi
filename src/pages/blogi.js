import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../layouts"
import Container from '../components/Container'
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  const blogPosts = data.blogPosts.edges;

  return (
    <Layout 
    >
      <SEO title="Home" description="Blogi" />
      
      <Container>
        <h1>Blogi</h1>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    blogPosts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog_post" }}}
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 100
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

export default BlogPage
