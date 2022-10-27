import React from 'react'
import "./Footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>PORTFOLIO</a>

      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
     
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/dilla.ash/"><FaFacebookF/></a>
        <a href="https://www.instagram.com/dillashh/"><AiFillInstagram/></a>
        <a href="https://www.linkedin.com/in/victor-tirica/"><AiFillLinkedin/></a>
        <a href="https://github.com/Dillassh"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tirica Victor. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default Footer