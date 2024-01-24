import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstargramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  /*Sending the email massege
  const form = useRef;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs062jr', 'template_vfzpzod', form.current, 'GRhUxNx1H3QucJhIu3IXQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };*/
  return (
    //section part to itiziate the cliets
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">These are the clients which I'm assosiated with.
            </p>
            <div id="clientImgs">
                <img src={Walmart} alt="client" className="clientImg" />
                <img src={Adobe} alt="client" className="clientImg" />
                <img src={Microsoft} alt="client" className="clientImg" />
                <img src={Facebook} alt="client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the from to discuss the work opportunities and collaborate!</span>
            <form className="contactForm" /*ref={form} onSubmit={sendEmail}*/>
                <input type="text" className="name"  placeholder='Enter Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className="msg" name="messege" rows="5" placeholder='Your messege'></textarea>
                <button className="submitBtn" type='submit' value ='Send'>Submit</button>
                <div className="links">
                    <a href='https://www.facebook.com/koshi98k'><img src={FacebookIcon} alt="facebook" className="link" /></a>
                    <a href='https://twitter.com/dileepa06193159'><img src={TwitterIcon} alt="twitter" className="link" /> </a>
                    <a href='https://youtube.com/channel/UCDcS6eV_Reyaypw3FB3YhqQ'><img src={YoutubeIcon} alt="youtube" className="link" /></a>
                    <a href='https://instagram.com/_dileepa._?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'><img src={InstargramIcon} alt="instagram" className="link" />  </a>
                </div>
            </form>
        </div>
    </section>
  );
}
export default Contact