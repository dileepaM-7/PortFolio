import React from 'react'
import './skills.css'
import Sd from '../../assets/developer.png'
import WebDesign from '../../assets/website-design.png'
import AppDeisgn from '../../assets/app-design.png'
import MachineLearn from '../../assets/Mlearning.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do <br /></span>
        <span className="skillDesc">I'm a skilled and passsonate web designer with experince of HTML,CSS,JAVA SCRIPT and REACT and 
            I also develop application and aslo Softwares. </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Sd} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Software Developer</h2>
                    <p>Developing software according to company preferences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>Web page design is the my main carrier path.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDeisgn} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>I develop both type of apps such as web application and aslo the mobile appplication.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={MachineLearn} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Machine Learning</h2>
                    <p>Have a Good experince with Machine Learning modles.</p>
                </div>
            </div>
        </div>    
    </section>
  );
}

export default Skills