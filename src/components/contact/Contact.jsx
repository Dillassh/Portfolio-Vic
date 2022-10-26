import React from 'react'
import "./Contact.css"
import {HiOutlineMail} from 'react-icons/hi'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com';
import  { useRef } from 'react';

const Contact = () => {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0uup36u', 'template_mwyohzl', form.current, 'RGyBT3en_bQQv1bJF')
      
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dill.assh@gmail.com</h5>
            <a href="mailto:dill.assh@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Tirica Victor</h5>
            <a href="https://m.me/dilla.ash/">Send a message</a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+40742423118</h5>
            <a href="https://api.whatsapp.com/send?phone=+40742423118">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your message required'></textarea>
          <button  type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact