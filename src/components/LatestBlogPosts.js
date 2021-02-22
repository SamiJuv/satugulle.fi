import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import striptags from 'striptags'
import teasy from 'teasy'

const TitleContainer = styled.div`
  text-align: center;
`

const Title = styled.h2`
  position: relative;
`

const Post = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDir};
  margin-bottom: 6rem;
`

const TextContainer = styled.div`
  margin: 0 0 0 3rem;
  ${props => props.reverse && 'margin: 0 3rem 0 0;'}
`

const Image = styled(Img)`
  border-radius: 50%;
  flex: 1 0 auto;
`

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: hsla(0,0%,0%,0.9);
`

const LatestBlogPosts = ({ posts }) => {
  return (
    <>
      <TitleContainer>
        <Title>Blogi</Title>
      </TitleContainer>

      {posts.map(({ node: post }, index) => {
        let teaser = striptags(post.html);
        teaser = teasy(teaser, 140, 220);

        return (
          <Post key={post.frontmatter.date} flexDir={(index % 2 === 0) ? 'row' : 'row-reverse'}>
            <Image fixed={post.frontmatter?.main_image?.childImageSharp.fixed} />
            <TextContainer reverse={(index % 2 !== 0) ? true : false}>
              <h3><StyledLink paintDrip duration={0.2} hex="#f6f6f6" to={post.frontmatter.path}>{post.frontmatter.title}</StyledLink></h3>
              <p>{teaser}</p>
            </TextContainer>
          </Post>
        )
      })}
    </>
  )
}

export default LatestBlogPosts;