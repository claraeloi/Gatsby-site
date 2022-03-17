import * as React from "react"
import PropTypes from "prop-types"
import Menu from "../Menu"
import Footer from "../Footer"
import GlobalStyle from "../../styles/globalStyled"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout