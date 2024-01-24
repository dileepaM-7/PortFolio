import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

/*The whole intro part is in this section*/
const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Dileepa
            </span><br />a Software developer..</span>
            <p className="introPara">I'm a skilled developer 
            with experince and vishualy appling from websites. </p>
            <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/>Hire Me!</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />

    </section>
  )
}

export default Intro