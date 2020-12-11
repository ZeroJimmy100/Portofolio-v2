import React from 'react';
import '../components/css/NavBar2.css';
import LogoIcon from '../components/css/MyLogo2.png';
import { Image } from 'react-bootstrap';

export default function NavBar2() {
    return (
        
            <header className = "header">
                <a href="/" className="Mylogo"><Image className="homeImg" src={LogoIcon} fluid alt=""/></a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
                <ul className="LeMenu">
                    <li><a href="#SectionOne">Index</a></li>
                    <li><a href="#SectionTwo">About me</a></li>
                    <li><a href="#SectionThree">Projects</a></li>
                    <li><a href="#SectionFour">Testimonials</a></li>
                    <li><a href="https://drive.google.com/file/d/17uBR7bRPLF0Mn5kIxbQeP0itsfmeb5d8/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                    <li><a href="https://github.com/ZeroJimmy100" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </header>
           
       
    )
}
