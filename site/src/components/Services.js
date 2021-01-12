import React from "react"
import Title from "./title"

const Services = ({ title }) => {
  return (
    <section className="services container">
      <Title title={title} />
      <div className="services__grid">
        <div className="services__content">
          <h3>Web Design</h3>
          <p>
            I will provide you with a clean and modern design of what your
            website could look like before development to set your expectations.{" "}
          </p>
        </div>
        <div className="services__content">
          <h3>Web Development</h3>
          <p>
            I develop bespoke websites with the latest web tehcnologies to
            ensure your site is modern, responsive and scalable to meet all your
            business needs.
          </p>
        </div>
        <div className="services__content">
          <h3>SEO</h3>
          <p>
            Good SEO is an intergral part of any online business to allow a site
            to generate organic traffic. I will ensure that your website is SEO
            optimise to maxmise its potential.
          </p>
        </div>
        <div className="services__content">
          <h3>Content Management</h3>
          <p>
            I will provide you with a clean and modern design of what your
            website could look like before development to set your expectations.{" "}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
