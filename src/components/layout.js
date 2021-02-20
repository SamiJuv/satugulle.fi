import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'

const Container = styled.section`
  position: relative;
  z-index: 2;
  max-width: 980px;
  margin: 0 auto;
`

const Layout = ({ children, mainImage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header mainImage={mainImage} />
      <Container>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href='https://www.gatsbyjs.com'>Gatsby</a>
        </footer>
      </Container>
    </>
  )
}

export default Layout
