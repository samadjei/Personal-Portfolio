import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/SEO"
import Title from "../components/title"

const About = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <SEO title="About" />
        <Title title="About Samuel Adjei"></Title>
        <div className="about__flex">
          <div className="about__profile">
            <Img
              className="about__profile--photo"
              fluid={data.aboutProfile.childImageSharp.fluid}
            />
          </div>
          <div className="about__content">
            <p>
              Hey there! I'm Samuel, a freelance web developer from Slough, UK.
              I enjoy creating websites and web applications the utilise the
              latest technology available. I have over 2 years experience as a
              self-taught web developer and i am continuosly striving to improve
              my knowldge and skillset to provide the most value for my clients.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query About {
    aboutProfile: file(relativePath: { eq: "profile-photo.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
