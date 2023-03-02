import React from 'react'
import './social.css'
import {FaTwitter} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
// import {FaEnvelope} from "react-icons/fa"

function Social() {
  return (
    <div className='social'>
      <FaTwitter className='social-icon' />
      <FaLinkedin className='social-icon' />
      {/* <FaEnvelope className='social.icons'/> */}
      
      </div>
  )
}

export default Social