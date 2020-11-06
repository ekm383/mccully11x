import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import NavBar from "./navbar/NavBar"
import Header from "./hero/Header"
import About from "./section/About"
import Map from "./map/Map"
import Footer from "./footer/Footer"
import Copyright from "./footer/Copyright"

const Layout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Map />
      <Footer />
      <Copyright />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
