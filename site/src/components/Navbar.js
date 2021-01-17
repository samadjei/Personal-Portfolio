import React, { Component } from "react"
import { Link } from "gatsby"
import NavSocial from "../constants/sociallinks"

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    // set click to the opposite value whenever you click it
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <>
        <nav className={this.state.clicked ? "navbar active" : "navbar"}>
          <div className="navbar__container">
            <div className="navbar--logo">
              <Link to="/">
                <h3>Samuel Adjei</h3>
              </Link>
            </div>
            <div className="navbar__links">
              <button
                onClick={this.handleClick}
                className={`hamburger menu-icon hamburger--collapse-r ${
                  this.state.clicked ? "is-active" : "hamburger"
                }`}
                type="button"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>

              <div className="navbar__menus">
                <ul className={this.state.clicked ? "menu active" : "menu"}>
                  <li className="menu__item">
                    <Link to="/work" className="menu--links">
                      Work
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/about" className="menu--links">
                      About
                    </Link>
                  </li>
                  <li className="menu__item">
                    <Link to="/blog" className="menu--links">
                      Blog
                    </Link>
                  </li>
                  <li className="menu__item">
                    <a className="menu--links-mobile" href="#hire">
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
                  href="#hire"
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
}

export default Navbar
