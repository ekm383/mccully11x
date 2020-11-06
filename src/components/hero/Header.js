import React from "react"
import styled from "styled-components"
import Box from "./Box"

const Header = () => {
  return (
    <StyledHeader>
      <Box />
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

export default Header
