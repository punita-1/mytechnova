import React from 'react'
import './SocialIcon.css'
import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

const SocialIcon = () => {
  return (
    <div className='social-icon-wrapper display-flex flex-col'>
      <div className='social-icon-heading'>"Get in Touch With Us" <br /><span>Don’t Miss Out Any Update Of Technova</span></div>
      <div className='my-social' >
        <ReactSocialIcon url="https://twitter.com" />
        <ReactSocialIcon url="https://facbook.com" />
        <ReactSocialIcon url="https://instagram.com" />
        <ReactSocialIcon url="https://www.linkedin.com" />
      </div>
    </div>
  )
}

export default SocialIcon
