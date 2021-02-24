import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import striptags from 'striptags'
import teasy from 'teasy'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const ServiceContainer = styled.div`

`

const Title = styled.h3`

`

const Teaser = styled.p`

`

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: hsla(0,0%,0%,0.9);
`

const Service = ({ data }) => {
  console.log(data);
  const image = data.frontmatter.main_image?.childImageSharp?.fixed;

  let teaser = striptags(data.html);
  teaser = teasy(teaser, 140, 220);

  return (
    <ServiceContainer>
      {image && (
        <StyledLink paintDrip duration={0.2} hex="#ffffff" to={data.frontmatter.path}>
          <Img fixed={image} />
        </StyledLink>
      )}
      <Title>
        <StyledLink paintDrip duration={0.2} hex="#ffffff" to={data.frontmatter.path}>
          {data.frontmatter.title}
        </StyledLink>
      </Title>
      <Teaser>
        {teaser}
      </Teaser>
    </ServiceContainer>
  )
}

export default Service