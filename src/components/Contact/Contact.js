import React from "react";
import "./Contact.scss";

const Contact = () => (
  <section className="contact">
    <div className="contact__container">
      <h2 className="contact__heading">Feel free to contact me!</h2>
      <form
        className="contact__form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Your Name: * </label> <br />
          <input type="text" name="name" id="name" min="3" placeholder="John Doe" required />
        </p>
        <p>
          <label htmlFor="email">Your Email: * </label> <br />
          <input type="email" name="email" id="email" placeholder="john@example.com" required />
        </p>
        <p>
          <label htmlFor="message">Message: * </label> <br />
          <textarea name="message" id="message" placeholder="I'd like to chat about..." required></textarea>
        </p>
        <p>
          <div data-netlify-recaptha="true"></div>
        </p>
        <p>
          <button className="btn btn--blue contact__btn" type="submit">
            SEND
          </button>
        </p>
      </form>
    </div>
  </section>
);

export default Contact;
