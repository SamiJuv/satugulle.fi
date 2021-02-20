import { Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import LogoImg from '../images/logo.svg'

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`

const Header = ({ mainImage }) => (
  <header>
    {mainImage && (
      <Img fluid={mainImage} />
    )}

    <Container>
      <div className="logo">
        <Link to='/'>
          <img src={LogoImg} alt='Logo' />
        </Link>
      </div>
    </Container>
  </header>
)

export default Header
