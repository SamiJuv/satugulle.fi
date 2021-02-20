import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`

const ListItem = styled.li`
  margin: 0 1rem;
  padding: 0;
`

const StyledLink = styled(AniLink)`
  text-decoration: none;
`

const Menu = ({ items }) => (
  <MenuContainer>
    <List>
      {items.map(item => (
        <ListItem key={item.path}><StyledLink paintDrip duration={0.2} hex="#f6f6f6" to={item.path}>{item.label}</StyledLink></ListItem>
      ))}
    </List>
  </MenuContainer>
)

export default Menu;