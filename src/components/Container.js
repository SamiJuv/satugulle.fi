import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
`

const StyledContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 980px;
  margin: 0 auto;
`

const Container = ({ children, bgColor }) => (
  <Wrapper bgColor={bgColor}>
    <StyledContainer >{children}</StyledContainer>
  </Wrapper>
)

export default Container;