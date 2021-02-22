import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Post = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

const TextContainer = styled.div`

`

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: hsla(0,0%,0%,0.9);
`

const LatestBlogPosts = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <h2>Blogi</h2>

      {posts.map(({ node: post }) => (
        <Post key={post.frontmatter.date}>
          <Img fixed={post.frontmatter?.main_image?.childImageSharp.fixed} />
          <TextContainer>
            <h3><StyledLink paintDrip duration={0.2} hex="#f6f6f6" to={post.frontmatter.path}>{post.frontmatter.title}</StyledLink></h3>
          </TextContainer>
        </Post>
      ))}
    </>
  )
}

export default LatestBlogPosts;