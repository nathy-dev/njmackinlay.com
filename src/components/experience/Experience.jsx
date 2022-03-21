import React from 'react'
import './Experience.css'
import { MdSchool, MdWork } from 'react-icons/md'

import { Pagination, Navigation, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>Some Things I've Done</h2>

        <Swiper
        className='container experience__container'
        modules={[ Pagination, Navigation, Scrollbar, A11y ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        <SwiperSlide className='experience'>
          <MdWork className='exp__icon'/>
          <h5 className='exp__name'>Hawaiian Airlines | Aug 2021 - Present</h5>
          <h3>Software Developement Engineer</h3>
            <small className='exp__summary'>
              <ul>
                <li>
                - Created build pipeline and script to automatically build and publish custom libraries, reducing development time significantly.
                </li>
                <li>
                - Implemented NGRX for state management across all customer facing web applications.
                </li>
              </ul>
            </small>
        </SwiperSlide>
        <SwiperSlide className='experience'>
          <MdWork className='exp__icon'/>
          <h5 className='exp__name'>Hawaiian Airlines | July 2021 - Aug 2021</h5>
          <h3>SDE Intern</h3>
            <small className='exp__summary'>
            <ul>
                <li>
                - Created a style guide and library template to reduce ambiguity and lower development time by enforcing standards.
                </li>
                <li>
                - Developed multiple component libraries (Angular 11) which were downloaded and installed 500+ times by Hawaiian Airlines employees.
                </li>
              </ul>
            </small>
        </SwiperSlide>
        <SwiperSlide className='experience'>
          <MdSchool className='exp__icon'/>
          <h5 className='exp__name'>Arizona State University | Expected Oct 22</h5>
          <h3>Master's of Computer Science</h3>
            <small className='exp__summary'>
              <b>GPA:</b> 3.88/4.00
              <br/>
              Highlighted Coursework: Mobile Computing, Software Design, Blockchain Technologies, Software Program Management
            </small>
        </SwiperSlide>
        <SwiperSlide className='experience'>
          <MdSchool className='exp__icon'/>
          <h5 className='exp__name'>Arizona State University | December 2020</h5>
          <h3>Philosophy (BA)</h3>
            <small className='exp__summary'>
              <b>GPA:</b> 3.90/4.00
              <br/>
              Highlighted Coursework: Ethics of Computing and AI, Data Structures and Algorithims, Symbolic Logic, Principles of Programming Languages
            </small>
        </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Experience