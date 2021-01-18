import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ id, image, url }) => {
  return (
    <section className="project">
      {/* <Link to={`/projects/${slug}`} className="project" key={id}>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="project__img" />
        )}
		  </Link> */}
      <a target="_blank" rel="noreferrer" href={url}>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="project__img" />
        )}
      </a>
    </section>
  )
}

Project.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}
export default Project
