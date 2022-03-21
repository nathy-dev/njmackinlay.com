import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai'
import { MdWorkOutline } from 'react-icons/md'
import { BiPaint } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#about" onClick={() => setActiveNav('#about')} className={ activeNav === '#about' ? 'active': '' }><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active': '' }><MdWorkOutline /></a>
      <a href="#" onClick={() => setActiveNav('#')} className={ activeNav === '#' ? 'active': '' }><AiOutlineHome /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active': '' }><BiPaint /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active': '' }><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav