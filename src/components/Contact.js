import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2wqb2y9', 
      'template_jntes5e', 
      form.current,
      'aa6JEx1PKujgHw8e5' 
    )
    .then((result) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Failed to send the message');
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input-row">
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
