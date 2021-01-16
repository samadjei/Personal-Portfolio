import React from "react"
import { Link } from "gatsby"
import { FiInstagram } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__left">
            <h3 className="footer--titles white">Samuel Adjei</h3>
            <h5 className="footer--subhead white">
              Freelance Web Designer & Developer
            </h5>
            <p className="white">
              I'm a Freelance Web Developer based in Slough. I work remotely,
              providing web developer/design services to businesses around the
              UK. If you have an upcoming project you'd like to discuss, please
              get in <Link to="/contact">touch</Link>{" "}
            </p>
          </div>
          <div className="footer__center">
            <ul>
              <h3 className="footer--titles white">Quick Links</h3>
              <li>
                <Link className="white" to="/">
                  Work
                </Link>
              </li>
              <li>
                <Link className="white" to="/">
                  Services
                </Link>
              </li>
              <li>
                <Link className="white" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="white" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="white" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__right">
            <div className="footer__contact">
              <h3 className="footer--titles white">Contact</h3>
              <p className="white">info.samadjei@gmail.com</p>
            </div>
            <div className="footer__social">
              <h3 className="footer--titles white">Socials</h3>
              <a
                className="socials__outer"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/samkadjei"
              >
                <FiTwitter className="socials--inner white" />
              </a>
              <a
                className="socials__outer"
                target="_blank"
                rel="noopener noreferrer"
                href=" www.linkedin.com/in/samuel-adjei"
              >
                <FiLinkedin className="socials--inner white" />
              </a>
              <a
                className="socials__outer white"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/samadjeiltd/"
              >
                <FiInstagram className="socials--inner" />
              </a>
            </div>
          </div>
        </div>
        <p className="footer--name white">
          &copy; {new Date().getFullYear()} Samuel Adjei Ltd - Feelance Web
          Developer - All Rights Reserved.{" "}
        </p>
      </div>
    </footer>
  )
}

export default Footer
