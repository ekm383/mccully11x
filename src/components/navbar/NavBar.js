import React, { Component } from "react"
import NavBarContact from "./NavBarContact"
import NavBarLogo from "./NavBarLogo"
import NavBarLinks from "./NavBarLinks"
import styled from "styled-components"

export default class NavBar extends Component {
  state = {
    navBarOpen: false,
  }

  handleNavBar = () => {
    this.setState(() => {
      return { navBarOpen: !this.state.navBarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <NavBarContact handleNavBar={this.handleNavBar} />
        <NavBarLogo />
        <NavBarLinks navBarOpen={this.state.navBarOpen} />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  width: 100%;
  margin: 0 auto;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 1rem;
  }
`
