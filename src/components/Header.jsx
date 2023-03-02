import React from 'react'
import './header.css';
import imgME from '../image/pic1.jpg'
import Social from './Social';



function Header() {
  return (
    <div className='hero-container'>
      <div className='hero-left'>
        <div className='hero-left-top'>
          <div className='name'>
            <h1>Oluleye Stephen</h1>
          </div>
          <ul>
            <li>About Me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
        </div>
        <div className='hero-left-bottom'>
          
          <p>HI THERE <br />

          I AM Oluleye Stephen</p>

        <h2>A Top-notch Developer, <br />
         Enthusiatic Dev and Software Engineer.</h2>
         <Social />
        
        </div>

      </div>
      <div className='mypics'>
        <img className='mine' src= {imgME} alt="" />
        {/* <Social /> */}
      </div>
     
          


      
       
    </div>

    
  )
}

export default Header