import React from 'react'

import Header from '../components/header'

import './index.css';

const Layout = ({ children, secondContainerContent, mainImage, titleText }) => (
  <>
    <Header mainImage={mainImage} titleText={titleText} />
    
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
  </>
)

export default Layout
