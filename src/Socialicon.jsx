import React from 'react'
import './SocialIcon.css';
// import './anotherdoodle.css';


import { SocialIcon as ReactSocialIcon } from 'react-social-icons'

const SocialIcon = () => {
  return (
    <div className='socialicons'>
    <div className='social-icon-wrapper display-flex flex-col'>
      <div className='social-icon-heading'><b>"Get in Touch With Us"</b> <br /><span>Don’t Miss Out Any Update Of Technova</span></div>
      <div className='my-social' >
        <ReactSocialIcon url="https://twitter.com" style={{ height: 70, width: 70 }} />
        <ReactSocialIcon url="https://facbook.com" style={{ height: 70, width: 70 }} />
        <ReactSocialIcon url="https://instagram.com" style={{ height: 70, width: 70 }} />
        <ReactSocialIcon url="https://www.linkedin.com" style={{ height: 70, width: 70 }} />
      </div>
      <br></br>
      <br></br>
    </div>
    </div>
  )
}

export default SocialIcon
