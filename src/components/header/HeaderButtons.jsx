import React from 'react'
import cv from '../../assets/RESUME_WIP.pdf'

const HeaderButtons = () => {
  return (
    <div class='cta'>
        <a href={cv} target="_blank" rel='noreferrer' className='btn'>Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default HeaderButtons