import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      exterior: file(relativePath: { eq: "dk-pork.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      food: file(relativePath: { eq: "mio-pastalogy-pasta.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      texture: file(relativePath: { eq: "yellow-texture.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const exterior = data.exterior.childImageSharp.fluid
  const food = data.food.childImageSharp.fluid
  const texture = data.texture.childImageSharp.fluid
  return (
    <BackgroundImage className="bg-texture" fluid={texture}>
      <StyledAbout>
        <div className="img-container">
          <Img className="exterior-img" fluid={exterior} alt="exterior image" />
          <Img className="food-img" fluid={food} alt="exterior image" />
        </div>
        <div className="copy-container">
          <h4>Quality cuisine made with love and experience.</h4>
          <h2>McCully 11X</h2>
          <p>
            Dell’s Kitchen and Bakery is the brainchild of Chef Dell Valdez. His
            love and passion for food and creativity has led him to open his
            first takeout eatery along with a bakery. Drawing from his years of
            culinary experience in some of Hawaii’s best restaurants, Chef has
            applied those techniques to his interpretation of “Local
            Style/Asian” food. Layers of flavor, local products, and always with
            Aloha is what can and to be expected here at “d.k.b”.
          </p>
          <br />
          <p>
            The concept of Mio Pastalogy is being able to provide home made
            fresh pasta, sauces, and fresh daily ingredients in an easy and
            quick manner to our customers. Our customers will have the freedom
            in deciding on how to “build” their own personal pasta creation or
            choose from one of our own in house specialty dishes. The creation
            process that we offer is what makes Mio Pastalogy a cut above the
            rest. Because here..it is truly “my” pasta.. Buon Appetito.
          </p>
          <div className="actions-container">
            <a href="https://goo.gl/maps/fqyniu4CNXqmJPbw7">
              <button className="actions-button">Directions</button>
            </a>
          </div>
        </div>
      </StyledAbout>
    </BackgroundImage>
  )
}

const StyledAbout = styled.div`
  width: 100vw;
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .img-container {
    flex-basis: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .exterior-img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
    .food-img {
      width: 200px;
      margin-top: -75px;
      margin-right: -30px;
    }
  }
  .copy-container {
    flex-basis: 50%;
    margin-left: 1rem;
    padding-top: 2rem;
    position: relative;
    z-index: 1;
    color: var(--mainColor);
    h4 {
      font-family: "trebuchet";
      font-style: italic;
      font-weight: lighter;
    }
    h2 {
      font-size: 3rem;
      text-transform: uppercase;
      margin-left: -50px;
      margin-bottom: 10px;
      position: relative;
      z-index: 1;
    }
    p {
      color: var(--darkGray);
    }
  }
  .actions-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3rem;
    padding-top: 2rem;
    svg {
      font-size: 2rem;
      color: var(--mainColor);
      margin-right: 2px;
      transition: 100ms ease-in-out;
      &:hover {
        cursor: pointer;
        color: var(--darkGray);
      }
    }
    .actions-button {
      margin-left: 5px;
      background: none;
      padding: 0.3rem 1.2rem;
      border-radius: 25px;
      border: 2px solid var(--mainColor);
      color: var(--mainColor);
      text-transform: uppercase;
      transition: 100ms ease-in-out;
      &:hover {
        cursor: pointer;
        border: 2px solid var(--darkGray);
        color: var(--darkGray);
      }
    }
  }
  @media (max-width: 768px) {
    width: 90vw;
    flex-direction: column-reverse;
    margin: 0rem auto;
    padding: 2rem 0rem;
    .img-container {
      .food-img {
        width: 200px;
        margin-right: 0px;
      }
    }
    .copy-container {
      margin: 0rem auto 2rem auto;
      text-align: center;
      h2 {
        font-size: 2rem;
        margin-left: 0;
      }
    }
    .actions-container {
      padding-right: 0rem;
      justify-content: center;
    }
  }
`

export default About
