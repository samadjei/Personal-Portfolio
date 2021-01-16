import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/services"
import Project from "../components/Projects"
import MoreInfo from "../components/MoreInfo"
import Contact from "../components/contact"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Hero />
      <Services title="what services do i provide?" />
      <MoreInfo title="Why hire Samuel Adjei as your develop?" />
      <Project projects={projects} title="See my work" />
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
