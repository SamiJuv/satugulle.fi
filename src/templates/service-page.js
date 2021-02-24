import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'

const Template = ({ data, location }) => {
  const { markdownRemark: page } = data;

  return (
    <Layout location={location}>
      <SEO title={page.frontmatter.title} />
      <div className='service-page-container'>
        <h1>{page.frontmatter.title}</h1>
        <div
          className='page-content'
          dangerouslySetInnerHTML={{ __html: page.html }}
        />
      </div>
    </Layout>
  )
}

export default Template;

export const pageQuery = graphql`
  query ServicePageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        path
        title
      }
    }
  }
`