import React from 'react'
import './get.css'
import Social from './Social'

function Get() {
  return (
<div className='Getin'>
    <div className='left-getin'>
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
              < Social />
   

      <p> Oluleyes@gmail.com</p>
      <p>(+234)808-295-4483</p>
    </div>
    
       
        <div className='right-getin'>
            <h2>Need a Service?</h2>
            <h1>Send A Message</h1>
            <div className='form'>
                <form action="">Enter your name</form>
                <textarea name="" id="" cols="40" rows="2"></textarea>
                <form action="">Enter your Email address</form>
                <textarea name="" id="" cols="40" rows="2"></textarea>
                <form action="">Write a message</form>
                <textarea name="" id="" cols="40" rows="5"></textarea>
                <form action="send"></form>
                <button><a href="#Send Message">Send Message</a></button>


            </div>

        </div>





</div>
  )
}

export default Get