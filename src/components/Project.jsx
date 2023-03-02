import React from 'react'
import './project.css'
import Antic from '../image/antic.png'
import Maramin from '../image/maramin.png'
import Newhorizon from '../image/newHorizon.png'

function Project() {
  return (
    <div className='project-container'>
      <div className='screenshot'>
        <img className='works' src={Antic} alt="" />
      </div>
      <div className='screenshot'>
        <img className='works' src={Maramin} alt="" /> 
      </div>
      <div className='screenshot'>
        <img className='works' src={Newhorizon} alt="" />
      </div>
    
    
    
    </div>
  )
}

export default Project