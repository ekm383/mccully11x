import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const NavBarLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mccully11x-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <LogoWrapper>
      <Img
        className="logo"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  width: 45vw;
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  .logo {
    width: 80px;
  }
  @media (min-width: 768px) {
    width: 30vw;
    justify-content: center;
    padding-top: 0rem;
    .logo {
      width: 100px;
    }
  }
`

export default NavBarLogo
