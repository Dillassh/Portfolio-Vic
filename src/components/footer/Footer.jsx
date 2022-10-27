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
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="http://linkedin.com"><AiFillLinkedin/></a>
        <a href="http://github.com"><AiFillGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Tirica Victor. All rights reserved. </small>
      </div>

    </footer>
  )
}

export default Footer