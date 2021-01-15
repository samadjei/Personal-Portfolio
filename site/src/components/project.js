import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Project = ({ id,image, slug }) => {
  return (
    <section className="project">
      <Link to={`/projects/${slug}`} className="project" key={id}>
        {image && (
          <Image fluid={image.childImageSharp.fluid} className="project__img" />
        )}
      </Link>
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
