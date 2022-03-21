import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import {AiOutlinePhone, AiTwotoneMail} from 'react-icons/ai'
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../private/variables';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiTwotoneMail />
            <h4>Email</h4>
            <h5>njmackinlay@gmail.com</h5>
          </article>
          <article className='contact_option'>
            <AiOutlinePhone />
            <h4>Phone</h4>
            <h5>(480) 378 7543</h5>
          </article>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" name ='name' placeholder='Your Full Name' required/>
          <input type="email" name ='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder="What do you want to tell me?" required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact