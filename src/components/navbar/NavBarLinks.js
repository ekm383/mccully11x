import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaYelp, FaInstagram } from "react-icons/fa"

class NavBarLinks extends Component {
  state = {
    links: [],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    color: var(--darkGray);
    text-transform: uppercase;
    cursor: pointer;
  }
  height: ${props => (props.open ? "240px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    width: 30vw;
    height: auto;
    display: flex;
    justify-content: flex-end;
    font-size: 1.2rem;
    margin-right: 1rem;
    .nav-link {
      margin-right: 5px;
    }
    .nav-link:hover {
      color: var(--mainColor);
    }
  }
`

export default NavBarLinks
