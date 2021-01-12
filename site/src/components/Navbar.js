import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Button } from "./Button"
import NavSocial from "../constants/socialLinks"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // Displays the hamburger menu at a certain screen size
  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener("resize", showButton)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar__container">
          <div className="navbar--logo">
            <Link to="/">
              <h3>Samuel Adjei</h3>
            </Link>
          </div>
          <div className="navbar__links">
            <button
              onClick={handleClick}
              className={`hamburger menu-icon hamburger--collapse-r ${
                click ? "is-active" : "hamburger"
              }`}
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>

            <div className="navbar__menus">
              <ul className={click ? "menu active" : "menu"}>
                <li className="menu__item">
                  <Link
                    to="/work"
                    className="menu--links"
                    onClick={closeMobileMenu}
                  >
                    Work
                  </Link>
                </li>

                <li className="menu__item">
                  <Link
                    to="/services"
                    className="menu--links"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/about"
                    className="menu--links"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/blog"
                    className="menu--links"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li className="menu__item">
                  <a
                    className="menu--links-mobile"
                    href="mailto:info.samadjei@gmail.com"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </a>
                </li>
                <NavSocial />
              </ul>
            </div>
            <div id="cta">
              <Link to="/contact">
                <Button
                  className="btn"
                  buttonStyle="btn--outline"
                  buttonSize="btn--desktop"
                >
                  Hire Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
