import React from "react"
import Title from "./title"
import Project from "./Project"
import { Link } from "gatsby"

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
      <div className="link">
        <Link className="link--inner" to="/work">View More Projects</Link>
      </div>
    </section>
  )
}

export default Projects
