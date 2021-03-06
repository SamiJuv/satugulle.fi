import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../layouts"
import Container from '../components/Container'
import SEO from "../components/seo"
import LatestBlogPosts from "../components/LatestBlogPosts";

const MainContent = styled.div`
  margin-bottom: 4rem;
`

const IndexPage = ({ data, location }) => {
  const { node: frontPageNode } = data.frontPage.edges[0];
  const blogPosts = data.blogPosts.edges;

  return (
    <Layout 
      titleText={frontPageNode.frontmatter.title} 
      mainImage={frontPageNode.frontmatter?.main_image?.childImageSharp.fixed}
      location={location}
    >
      <SEO title="Home" description={frontPageNode.frontmatter.description} />
      
      <Container>
        <MainContent dangerouslySetInnerHTML={{ __html: frontPageNode.html }} />
      </Container>

      <Container bgColor='#fcfcfc' borderColor='#f5f5f5'>
        <LatestBlogPosts posts={blogPosts} />
      </Container>
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
                fixed(width: 2200, height: 700) {
                  ...GatsbyImageSharpFixed
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
                fixed(width: 300, height: 300, quality: 100) {
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
