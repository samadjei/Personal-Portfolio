import React from "react"
import Title from "./title"
import Image from "gatsby-image"

const Project = ({ title, image }) => {
  return (
    <section className="container">
      <Title title={title} />
      {projects.map(blog => {
        return <Project key={project.id} {...project} />
      })}
    </section>
  )
}

export default Project
