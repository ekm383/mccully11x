import React from "react"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"

const NavBarContact = ({ handleNavBar }) => {
  return (
    <NavBarContactWrapper>
      <ul className="contact">
        <li>(808) 840-0496</li>
        <li>1110 McCully St. Honolulu, HI 96826</li>
        <li>Open Daily 7:00am-8:00pm</li>
      </ul>
      <FaBars
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </NavBarContactWrapper>
  )
}

const NavBarContactWrapper = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  .toggle-icon {
    display: none;
  }
  .contact {
    list-style-type: none;
    font-size: 0.5rem;
    text-align: center;
    color: var(--darkGray);
    line-height: 0.7rem;
    li:nth-child(1) {
      font-size: 0.8rem;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    width: 30vw;
    .toggle-icon {
      display: none;
    }
  }
`

export default NavBarContact
