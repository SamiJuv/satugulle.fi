import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import striptags from 'striptags'
import teasy from 'teasy'

const Wrapper = styled.div`
  padding: 4rem 0;
`

const TitleContainer = styled.div`
  text-align: center;
`

const Title = styled.h2`
  position: relative;
  margin-top: 0;
`

const Post = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDir};
  margin-bottom: 6rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const TextContainer = styled.div`
  margin: 0 0 0 3rem;
  ${props => props.reverse && 'margin: 0 3rem 0 0;'}
`

const Image = styled(Img)`
  border-radius: 50%;
  flex: 1 0 auto;
  transition: border-radius 0.4s;

  &:hover {
    border-radius: 5%;
  }
`

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: hsla(0,0%,0%,0.9);
`

const LatestBlogPosts = ({ posts }) => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>Blogi</Title>
      </TitleContainer>

      {posts.map(({ node: post }, index) => {
        let teaser = striptags(post.html);
        teaser = teasy(teaser, 140, 220);

        return (
          <Post key={post.frontmatter.date} flexDir={(index % 2 === 0) ? 'row' : 'row-reverse'}>
            <StyledLink paintDrip duration={0.2} hex="#ffffff" to={post.frontmatter.path}><Image fixed={post.frontmatter?.main_image?.childImageSharp.fixed} /></StyledLink>
            <TextContainer reverse={(index % 2 !== 0) ? true : false}>
              <h3><StyledLink paintDrip duration={0.2} hex="#ffffff" to={post.frontmatter.path}>{post.frontmatter.title}</StyledLink></h3>
              <p>{teaser}</p>
            </TextContainer>
          </Post>
        )
      })}
    </Wrapper>
  )
}

export default LatestBlogPosts;