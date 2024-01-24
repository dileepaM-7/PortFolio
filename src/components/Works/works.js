import React from 'react'
import './works.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import portfolio4 from '../../assets/portfolio-4.png'
import portfolio5 from '../../assets/portfolio-5.png'
import portfolio6 from '../../assets/portfolio-6.png'
import portfolio7 from '../../assets/portfolio-7.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">Feel free to explore my work, and if you have any questions 
        or would like to collaborate, don't hesitate to get in touch. I'm always excited to take 
        on new challenges and create solutions that make a difference.</span>
        <div className="worksImgs">
            <img src={portfolio1} alt="" className="workImg" />
            <img src={portfolio2} alt="" className="workImg" />
            <img src={portfolio3} alt="" className="workImg" />
            <img src={portfolio4} alt="" className="workImg" />
            <img src={portfolio5} alt="" className="workImg" />
            <img src={portfolio7} alt="" className="workImg" />
        </div>
        <button className="workBtn">See More</button>

    </section>
  );
}

export default Works