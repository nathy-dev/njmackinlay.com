import React from 'react'
import './Header.css'
import HeaderButtons from './HeaderButtons'
import Socials from './Socials'
import EmojiCycle from './Emojis'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello My Name is</h5>
        <h1>Nathaniel MacKinlay</h1>
        <h5 className="text-light">Software Engineer</h5>
        <HeaderButtons />
        <Socials />
     

        <div className="me">
          <EmojiCycle />
        </div>
        
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header