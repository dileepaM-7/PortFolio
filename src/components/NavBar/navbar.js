import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contacting from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo'/>
        <div className="dekstopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth = {true} offset={-100} duration={500} className="dekstopMenuListItems">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth = {true} offset={-50} duration={500} className="dekstopMenuListItems">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth = {true} offset={-100} duration={500} className="dekstopMenuListItems">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth = {true} offset={-100} duration={500} className="dekstopMenuListItems">Clients</Link>
        </div>
        <button className="dekstopMenubtn" onClick={()=>{
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>
            <img src={contacting} alt="" className="dekstopMenuImg" />Contact Me</button>
        <img src={menu} alt="logo" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth = {true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth = {true} offset={-50} duration={500} className="listItem"onClick={()=>setShowMenu(false)} >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth = {true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth = {true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth = {true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} >Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar