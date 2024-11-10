import React from 'react';
import '../styles/styles.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Maira Naseer.ud.din" />
        <input type="email" placeholder="mairanaseer638@gmail.com" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
