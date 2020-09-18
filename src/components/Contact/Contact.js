import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_e03z1m5', e.target, 'user_ClgaL0aV9mVJ1HcBHbqJW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    return (
        <div className="Contact" id="Contact">
            <h2 className="Contact-title">Contact Us</h2>
            <form onSubmit={sendEmail} className="Contact-form">
                    <input type="text" placeholder="Name" name="name" className="Contact-form-name"/>
                    <input type="text" placeholder="Email Address" name="email" className="Contact-form-email" />
                    <input type="text" placeholder="Subject" name="subject" className="Contact-form-text"/>
                    <textarea placeholder="your message" cols="30" rows="8" name="message" className="Contact-form-textarea"></textarea>
                    <input type="submit" value="send message" ></input>
            </form>
            <h1 className="Contact-number">910-910-910</h1>
            <h2 className="Contact-email">larryslawn@gmail.com</h2>
        </div>
    )
}