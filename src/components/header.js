import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import styled from 'styled-components'

import Menu from './menu';
import LogoImg from '../images/logo.svg'

const HeaderEl = styled.header`
  position: relative;
`

const Container = styled.div`
  position: ${props => props.positionValue};
  top: 1.4rem;
  left: 0;
  right: 0;
  height: 100%;
`
const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 0.8rem;
`

const LogoImage = styled.img`
  margin: 0;
  max-width: 240px;
`

const TitleContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

const H1 = styled.h1`
  max-width: 400px;
  margin: 0;
  position: absolute;
  bottom: 270px;
`

const Header = ({ location, mainImage, titleText }) => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allSettingsYaml {
        edges {
          node {
            nav_items {
              label
              path
            }
          }
        }
      }
    }
  `)

  const menuItems = data?.allSettingsYaml?.edges[0]?.node.nav_items;

  return (
    <HeaderEl>
      {mainImage && (
        <Img 
          fixed={mainImage} 
          objectFit='cover'
          objectPosition='50% 50%'
          style={{
            width: '100%'
          }}
          imgStyle={{
            maxWidth: 'none',
            width: '2200px',
            left: '50%',
            marginLeft: '-1100px'
          }}
        />
      )}

      <Container positionValue={mainImage ? 'absolute' : 'relative'} >
        <>
          <LogoContainer>
            <Link to='/'>
              <LogoImage src={LogoImg} alt='Logo' />
            </Link>
          </LogoContainer>

          {menuItems && (
            <Menu items={menuItems} location={location} />
          )}

          {titleText && (
            <TitleContainer>
              <H1>{titleText}</H1>
            </TitleContainer>
          )}
        </>
      </Container>
    </HeaderEl>
  )
}

export default Header
