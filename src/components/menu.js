import React from 'react'
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
  position: relative;
`

const StyledLink = styled(AniLink)`
  text-decoration: none;
  color: #3A3A3A;
`

const Underline = styled.div`
  position: absolute;
  bottom: -1px;
  width: 100%;
  height: 4px;
  background-color: #f8d674;
  border-radius: 5px;
`

const Menu = ({ items, location }) => (
  <MenuContainer>
    <List>
      {items.map(item => {
        const isActive = ((item.path.length > 1 && location?.pathname.includes(item.path)) || (item.path === '/' && location?.pathname === item.path));
        
        return (
          <ListItem key={item.path}>
            {isActive && (
              <Underline layoutId='underline' />
            )}
            <StyledLink paintDrip duration={0.2} hex="#ffffff" to={item.path}>{item.label}</StyledLink>
          </ListItem>
        )
      })}
    </List>
  </MenuContainer>
)

export default Menu;