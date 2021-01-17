import React from "react"
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import Title from "../components/title"

const About = () => {
  return (
    <Layout>
      <div className="container">
        <SEO title="About" />
        <Title className="projects--title" title="About Samuel Adjei"></Title>
        <div class="about">
               <div className="about__content ">
                  <p className="about__content--text">
                     Hey there! I'm Samuel, a freelance web developer from
                     Slough, UK. I enjoy creating websites and web applications
                     the utilise the latest technology available. I have over 2
                     years experience as a self-taught web developer and i am
                     continuosly striving to improve my knowldge and skillset to
                     provide the most value for my clients.
                  </p>
                  <p className="about__content--text">
                     I am enrolled in a 4 year course at the{" "}
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        href="https://www.uwe.ac.uk/"
                     >
                        University of the West of England
                     </a>{" "}
                     studying{" "}
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        href="https://www.tpdegrees.com/degrees/courses-placements-jobs/universities-list-itmb/"
                     >
                        ITMB
                     </a>
                     .Currently, i am doing a placement at{" "}
                     <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        href="https://www.pernod-ricard.com/en"
                     >
                        Pernod Ricard
                     </a>{" "}
                     as an IT Solution Intern.
                  </p>
                  <div className="stack">
                     <h4>Here's a few technologies i work with:</h4>
                     <div className="stack__grid">
                        <div className="stack__content">
                           <h5 className="stack--title">Front-end</h5>
                           <ul>
                              <li className="stack--items">HTML & (S)CSS</li>
                              <li className="stack--items">JavaScript</li>
                              <li className="stack--items">React</li>
                              <li className="stack--items">WordPress</li>
                           </ul>
                        </div>
                        <div className="stack__content">
                           <h5>Back-end</h5>
                           <ul>
                              <li className="stack--items">PHP</li>
                           </ul>
                        </div>
                        <div className="stack__content">
                           <h5>Design</h5>
                           <ul>
                              <li className="stack--items">Adobe XD</li>
                              <li className="stack--items">Figma</li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </div>
    </Layout>
  )
}

export default About
