import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { GiBananaPeeled } from 'react-icons/gi'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/njmackinlay' target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href='https://linkedin.com/in/njmackinlay' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://www.medicalnewstoday.com/articles/271157' target="_blank" rel='noreferrer'><GiBananaPeeled/></a>
    </div>
  )
}

export default Socials