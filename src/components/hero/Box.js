import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import styled from "styled-components"
import Banner from "./Banner"

const Box = () => {
  const data = useStaticQuery(graphql`
    query {
      box1: file(relativePath: { eq: "Dells-Kitchen-kalbi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      box2: file(relativePath: { eq: "mio-pasta.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo1: file(relativePath: { eq: "dells-kitchen-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logo2: file(relativePath: { eq: "mio-pastalogy-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const img1 = data.box1.childImageSharp.fluid
  const img2 = data.box2.childImageSharp.fluid
  const logo1 = data.logo1.childImageSharp.fluid
  const logo2 = data.logo2.childImageSharp.fluid
  return (
    <BoxWrapper>
      <div className="item item-1">
        <BackgroundImage className="bg-image" fluid={img1}>
          <Img className="logo" fluid={logo1} alt="Dell Logo" />
          <Banner
            title="Dell's Kitchen"
            subtitle="Quality Plate Lunches and Baked Goods"
          />
          <AniLink fade to="/">
            <button className="button-copy">Coming Soon</button>
          </AniLink>
        </BackgroundImage>
      </div>
      <div className="item item-2">
        <BackgroundImage className="bg-image" fluid={img2}>
          <Img className="logo" fluid={logo2} alt="Mio Logo" />
          <Banner title="Mio Pastalogy" subtitle="Fresh Pasta Made Daily" />
          <AniLink fade to="/">
            <button className="button-copy">Coming Soon</button>
          </AniLink>
        </BackgroundImage>
      </div>
    </BoxWrapper>
  )
}

const BoxWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0rem auto;
  .bg-image {
    padding: 2rem 0rem;
  }
  .item {
    width: 48%;
    text-align: center;
    .logo {
      width: 100px;
      height: 100px;
      margin: 0rem auto 0rem auto;
    }
    button {
      background: none;
      border-radius: 20px;
      border: 1px solid var(--white);
      margin: 2rem 0rem;
      transition: 100ms ease-in;
      &:hover {
        cursor: pointer;
        background: var(--white);
        color: var(--mainColor);
      }
    }
    .button-copy {
      text-transform: uppercase;
      color: var(--white);
      font-size: 0.7rem;
      top: 50%;
      padding: 0.4rem 1.2rem;
    }
  }
  @media (max-width: 768px) {
    .bg-image {
      padding: 1rem 0rem;
    }
    .item {
      width: 90%;
      margin-top: 1rem;
    }
    .item-2 .logo {
      margin-bottom: 10px;
    }
  }
`

export default Box
