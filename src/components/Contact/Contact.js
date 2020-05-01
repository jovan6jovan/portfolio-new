import React from "react";
import "./Contact.scss";

const Contact = () => (
  <section className="contact">
    <h2>Feel free to contact me!</h2>
    <form
      className="contact__form"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Your Name*: </label> <br />
        <input type="text" name="name" id="name" min="3" required />
      </p>
      <p>
        <label htmlFor="email">Your Email*: </label> <br />
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <label htmlFor="message">Message*: </label> <br />
        <textarea name="message" id="message" required></textarea>
      </p>
      <p>
        <div data-netlify-recaptha="true"></div>
      </p>
      <p>
        <input className="btn btn--blue contact__btn" type="submit" value="SEND" />
      </p>
    </form>
  </section>
);

export default Contact;
