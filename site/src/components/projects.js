import React from "react"
import Title from "./title"
import Project from "./Project"

const Projects = ({ title, projects }) => {
  return (
    <section className="container">
      <Title title={title} />
      {/* iterate over and spread out the projects  */}
      <div className="project-center">
        {projects.map(project => {
          return <Project key={project.id} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
