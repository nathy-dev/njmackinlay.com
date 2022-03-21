import React from 'react'
import './About.css'
import nath from '../../assets/nath.jpg'
import {SiJavascript} from 'react-icons/si'
import {GiClassicalKnowledge} from 'react-icons/gi'
import {FaCode} from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={nath} alt="profile"></img>
          </div>
        </div>

        <div className='about_content'>
          <div className="about__cards">
          <article className="about_card">
              <FaCode className='about_icon'/>
              <h5>Lifelong Learner</h5>
            </article>
            <article className="about_card">
              <SiJavascript className='about_icon'/>
              <h5>Frontend Enthusiast</h5>
            </article>
            <article className="about_card">
              <GiClassicalKnowledge className='about_icon'/>
              <h5>Amateur Philosopher</h5>
            </article>
          </div>

          <p>I'm a software developer from Arizona who loves learning and programming. 
            I hold a bachelor's degree in philosophy and I am currently pursing a masters in computer science.
             I believe technology should be seemlessly integrated into our lives in an accessible and intuitive manner. 
             Consequently, I love solving user facing problems.
            <br/>
          </p>

          <div className='interest'>Interest Areas:<br/> web & mobile development, UI/UX research, graphics</div>
        </div>
      </div>
    </section>
  )
}

export default About