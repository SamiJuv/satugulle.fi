import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../layouts'
import Container from '../components/Container'
import SEO from '../components/seo'

const Image = styled(Img)`
  margin-top: 1rem;
`

const Template = ({ data, location }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout location={location}>
      <SEO title={page.frontmatter.title} description={page.frontmatter.description} />
      
      {page.frontmatter.main_image?.childImageSharp && (
        <Image fluid={page.frontmatter.main_image?.childImageSharp.fluid} />
      )}

      <Container>
        <div className='blog-post-container'>
          <h1>{page.frontmatter.title}</h1>
          <div
            className='page-content'
            dangerouslySetInnerHTML={{ __html: page.html }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default Template;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
        title
        description
        main_image {
          childImageSharp {
            fluid(maxWidth: 2200, maxHeight: 400, cropFocus: EAST) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`