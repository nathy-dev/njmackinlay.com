import React from 'react'
import './Portfolio.css'
import hotdog from '../../assets/hotdog.jpeg'
import cc from '../../assets/crash-course.png'
import robo from '../../assets/robot.jpeg'
import rc from '../../assets/react-craft.png'

const data = [
  {
    id: 1,
    image: hotdog,
    title: 'Hot Dog or Not Hot Dog',
    small: 'React Native, GoogleCloud, CloudVision',
    smallContinued: "Inspired by HBO's Silicon Valley, this app classifies an image to determine whether it is a hotdog",
    git: 'https://github.com/njmackinlay/hotdog-or-not-hotdog'
  },
  {
    id: 2,
    image: rc,
    title: 'React MineCraft',
    small: 'Reactjs, ThreeJs, WebGl',
    smallContinued: "A playable, simplified version of the game minecraft that supports crafting, various bricks, and general gameplay",
    git: 'https://github.com/njmackinlay/react-cubed'
  },
  {
    id: 3,
    image: robo,
    title: 'Warehouse Automation',
    small: 'Clingo, Classic ASP',
    smallContinued: "A solution to the 2019 ASP challenge that seeks to discover optimal routes for stocking and transport automation",
    git: 'https://github.com/njmackinlay/Warehouse-Automation'
  },
  {
    id: 4,
    image: cc,
    title: 'Crash Course Web Game',
    small: 'Vanilla Js, HTML, CSS',
    smallContinued: "An html game that teaches players about insurance. Placed 1st for creativity and 3rd overall in the StateFarm 2020 Annual Hackathon",
    git: 'https://github.com/njmackinlay/Crash-Course'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, small, smallContinued, git}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>          
                <img src={image} alt={title}></img>
              </div>
                <h3>{title}</h3>
                <small><i>{small}</i></small><br/>
                <small>{smallContinued}</small><br/>
                <a className='btn btn-primary' href={git} target='_blank' rel='noreferrer'>View Code</a>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio