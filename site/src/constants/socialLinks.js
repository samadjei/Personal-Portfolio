import React from "react"
import { FiGithub } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
import { FiInstagram } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"

function socialLinks() {
  return (
    <ul className="menu__socials">
      <li className="menu__social">
        <a
          className="menu__social--links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/samadjei"
        >
          <FiGithub />
        </a>
      </li>
      <li className="menu__social">
        <a
          className="menu__social--links"
          target="_blank"
          rel="noopener noreferrer"
          href=" www.linkedin.com/in/samuel-adjei"
        >
          <FiLinkedin />
        </a>
      </li>
      <li className="menu__social">
        <a
          className="menu__social--links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/samadjeiltd/"
        >
          <FiInstagram />
        </a>
      </li>
      <li className="menu__social">
        <a
          className="menu__social--links"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/samkadjei"
        >
          <FiTwitter />
        </a>
      </li>
    </ul>
  )
}

export default socialLinks
