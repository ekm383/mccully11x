import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "mccully11x-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const logo = data.logo.childImageSharp.fluid
  return (
    <StyledFooter>
      <Img className="footer-logo" fluid={logo} alt="footer-logo" />
      <div className="footer-container">
        <div className="column">
          <h6>Hours of Operation:</h6>
          <ul>
            <li>Coming Soon</li>
            {/* <li>Sunday-Thursday 10:00am-9:00pm</li>
            <li>Friday & Saturday 10:00am-10:30pm</li> */}
          </ul>
        </div>
        <div className="column">
          <h6>Location & Directions:</h6>
          <ul>
            <li>1110 McCully St, Honolulu, HI 96826</li>
            <li>Driving Directions</li>
          </ul>
        </div>
        <div className="column">
          <h6>Contact Us:</h6>
          <ul>
            <li>Coming Soon</li>
            {/* <li>Phone: (808) 123-4567</li>
            <li>Email: info@mccully11x.com</li> */}
          </ul>
        </div>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 100vw;
  background: var(--mainColor);
  color: white;
  text-align: center;
  padding: 3rem 0rem;
  .footer-logo {
    width: 75px;
    margin: 0rem auto 2rem auto;
  }
  .footer-container {
    width: 80%;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .column {
      flex-basis: 33%;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
      text-transform: uppercase;
    }
    ul {
      list-style-type: none;
    }
    li {
      font-size: 10px;
      line-height: 1rem;
    }
  }
  @media (max-width: 768px) {
    .footer-container {
      padding: 0rem;
      .column {
        flex-basis: 100%;
      }
      .column:nth-child(1),
      .column:nth-child(2) {
        margin-bottom: 1rem;
      }
    }
  }
`

export default Footer
