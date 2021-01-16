import React from "react"

import Navbar from "./navbar"
import Footer from "./footer"

// Put components that will stay constant on all pages
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* contents of the page will be rendered in the children prop */}
      {children}

      <Footer />
    </>
  )
}

export default Layout
