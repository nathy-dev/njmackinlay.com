import React from 'react'
import './Portfolio.css'
import banan from '../../assets/banan.jpeg'

const data = [
  {
    id: 1,
    image: banan,
    title: 'Hot Dog or Not Hot Dog',
    small: 'A simple application that uses google api to classify image',
    git: 'https://github.com'
  },
  {
    id: 2,
    image: banan,
    title: 'Hot Dog or Not Hot Dog',
    small: 'A simple application that uses google api to classify image',
    git: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, small, git}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>          
                <img src={image} alt={title}></img>
              </div>
                <h3>{title}</h3>
                <small><i>{small}</i></small><br/>
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