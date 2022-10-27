import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/victor-tirica/" ><BsLinkedin/></a>
        <a href="https://github.com/Dillassh"><FaGithub/></a>
        <a href="https://www.facebook.com/dilla.ash/"><BsFacebook/></a>
        </div>
  )
}

export default HeaderSocials