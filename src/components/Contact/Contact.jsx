import React, {useRef} from 'react'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/social.png'
import medium from '../../assets/images/icons8-medium-50.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_9kwico4', 'template_kbug4xh', form.current, 
      {
    publicKey: 'z4YSe-3ipDja0QQpo',
      }
    )
    .then(
      () => {
        console.log('SUCCESS!');
        e.target.reset();
      },
      (error) => {
        console.log('FAILED...');
      },
    );
  }
  return (

    <section id='contact'>

    <div className="container">

        <h3>Contact</h3>
        <p>Let's build something awesome together! 🚀<br />
        Want to work together or share your thoughts on my projects? Let's connect! I'm always open to feedback and exciting new opportunities.</p>

        <form className='form' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name='user_name' />
            <input type="email" className='email' placeholder='Your Email' name='user_email' />
            <textarea name="message" className='msg' rows="5" placeholder='Your Message'></textarea>
            <button type='submit' className="basic-button">Send</button>
        </form>
        
        <div className="links">
                <a href="https://github.com/feyzanrsnr" target='blank'><img src={github} alt="" className="link" /></a>
                <a href="https://www.linkedin.com/in/feyzanursener/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="link" /></a>
                <a href="https://medium.com/@senerfeyza" target="_blank"><img src={medium} alt="" className='link' /></a>
        </div>
    </div>
</section>
  )
}

export default Contact
