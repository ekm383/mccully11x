import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  .box {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: var(--white);
  }
  .title {
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: bold;
    line-height: 3rem;
    margin-bottom: 0.5rem;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
  .subtitle {
    font-family: "trebuchet";
    font-size: 1rem;
    font-style: italic;
    font-weight: lighter;
    text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`

export default Banner
