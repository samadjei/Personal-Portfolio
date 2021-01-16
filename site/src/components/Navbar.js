import React, { useState } from "react"
import { Link } from "gatsby"
import NavSocial from "../constants/sociallinks"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

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
              <a
                className="btn btn-nav"
                buttonStyle="btn--outline"
                buttonSize="btn--desktop"
                href="hire"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
