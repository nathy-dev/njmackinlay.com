import React from 'react'
import './Header.css'
import HeaderButtons from './HeaderButtons'
import profile from '../../assets/bt.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello My Name is</h5>
        <h1>Nathaniel 'Nathy' MacKinlay</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderButtons />
        <Socials />

        <div className="me">
          <img src={profile} alt='Nathaniel Portrait'/>
        </div>
        
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header