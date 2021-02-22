import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'
import Container from '../components/Container'
import SEO from '../components/seo'

const Template = ({ data }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout>
      <SEO title={page.frontmatter.title} description={page.frontmatter.description} />
      
      <Container>
        <div className='basic-page-container'>
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
  query BasicPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
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
    }
  }
`