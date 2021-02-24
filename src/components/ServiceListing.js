import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Service from './Service'

const Wrapper = styled.div`
  background: #fcfcfc;
  border-top: 1px solid #f5f5f5;
  margin-top: 4rem;
`

const ServiceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(460px, 0fr));
  grid-gap: 6rem;
`

const ServiceListing = () => {
  const data = useStaticQuery(graphql`
    query ServiceQuery {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "service"}}}, limit: 100) {
        edges {
          node {
            frontmatter {
              title
              path
              main_image {
                childImageSharp {
                  fixed(width: 460, height: 300) {
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
  `)

  const { edges: services } = data.allMarkdownRemark;

  return (
    <Wrapper>
      <ServiceContainer>
        {services.map(service => (
          <Service key={service.node.frontmatter.path} data={service.node} />
        ))}
      </ServiceContainer>
    </Wrapper>
  )
}

export default ServiceListing