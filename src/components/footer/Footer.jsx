import React from 'react'
import './Footer.css'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <h5>Made with 💙 by njmackinlay</h5>
      <a href='https://github.com/njmackinlay' target="_blank" rel='noreferrer'><BsGithub/></a>
      <a href='https://linkedin.com/in/njmackinlay' target="_blank" rel='noreferrer'><BsLinkedin/></a>
    </div>
  )
}

export default Footer