import React, { useState } from "react";
import classes from "./ContactPage.module.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    localStorage.setItem("formData", JSON.stringify(formData));
    setName("");
    setEmail("");
    setMessage("");
    alert("Message sent successfully!");
  };

  return (
    <section className={classes.contactPage}>
      <h2>Get in Touch</h2>
      <p className={classes.subheading}>
        We'd love to hear from you! Please fill out the form below.
      </p>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={classes.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
