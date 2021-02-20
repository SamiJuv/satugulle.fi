import { Link, useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Menu from './Menu';
import LogoImg from '../images/logo.svg'

const Container = styled.div`
  position: ${props => props.positionValue};
  top: 40px;
  left: 0;
  right: 0;
`
const LogoContainer = styled.div`
  text-align: center;
`

const Header = ({ mainImage }) => {
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
    <header>
      {mainImage && (
        <Img fluid={mainImage} />
      )}

      <Container positionValue={mainImage ? 'absolute' : 'relative'} >
        <>
          <LogoContainer>
            <Link to='/'>
              <img src={LogoImg} alt='Logo' />
            </Link>
          </LogoContainer>

          {menuItems && (
            <Menu items={menuItems} />
          )}
        </>
      </Container>
    </header>
  )
}

export default Header
