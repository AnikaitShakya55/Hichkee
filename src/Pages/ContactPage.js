import React, { useState } from 'react';
import classes from './ContactPage.module.css'; 

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { name, email, message };
    localStorage.setItem('formData', JSON.stringify(formData));
  
    setName('');
    setEmail('');
    setMessage('');
    alert('Message sent successfully!');
  };

  return (
    <div className={classes.contactPage}>
      <h2>Contact Us</h2>
      <div className={classes.formContainer}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" value={message} onChange={handleMessageChange} required></textarea>
          </div>
          <button type="submit" className={classes.submitButton}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
