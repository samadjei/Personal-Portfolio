import React from "react"
import Title from "./Title"

const Contact = ({ title }) => {
  return (
    <section id="hire" className="container">
      <Title title={title} className="contact--title" />
      <p className="contact--sub">
        Get in touch with me, i am currently available for{" "}
        <span className="contact--hire">hire</span>!
      </p>

      <div className="contact">
        <form
          name="contact v1"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact v1" />
          <div className="contact__info">
            <label for="name" className="label" htmlFor="name">
              Name
            </label>
            <input type="text" name="name" placeholder="John Doe" />
          </div>
          <div className="contact__info">
            <label for="email" className="label" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="john.doe@gmail.com"
            />
          </div>
          <div className="contact__info">
            <label for="message" className="label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required="required"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
          <button className="btn btn--desktop contact__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
