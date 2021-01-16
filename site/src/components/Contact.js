import React from "react"

const Contact = () => {
  return (
    <section>
      <form
        name="contact v1"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label htmlFor="name">
            First Name <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            for="message"
            name="message"
            required="required"
            className="inputbox"
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact
