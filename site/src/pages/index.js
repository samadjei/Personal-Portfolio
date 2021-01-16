import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"
import Project from "../components/projects"
import MoreInfo from "../components/moreinfo"
import Contact from "../components/contact"
import SEO from "../components/seo"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Services title="what services do i provide?" />
      <MoreInfo title="Why hire Samuel Adjei as your developer?" />
      <Project projects={projects} title="See my work" showLink />
      <Contact title="Let's get connect" />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        content
        slug
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
