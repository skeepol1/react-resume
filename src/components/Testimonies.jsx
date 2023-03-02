import React from 'react'
import './testimonies.css'
import testImg from '../image/img1.jpg'
import secondImage from '../image/img2.jpg'

function Testimonies() {
  return (
    <div className='Testimonies'>
        <div className='test-left'>
          <h1>Testimonies & <br /> Recommendations</h1>
        </div>
        <div className='test-right'>
            <div className='div'>
            <img className='pics' src={testImg} alt="" />
            <h1>oluleye stephen</h1>
            <p>Steve gets things done. He’s very passionate <br />
             about what he does and he’s always fun to be <br /> with.
            </p>
            </div>
            <div className='div'>
            <img className='pics' src={testImg} alt="" />
            <h1>Oluleye stephen</h1>
            <p>Steve gets things done. He’s very passionate <br />
             about what he does and he’s always fun to be <br /> with.
            </p>
            </div>
            <div className='div'>
              <img className='pics' src={secondImage} alt="" />
              <h1>Oluleye Stephen</h1>
              <p>Steve gets things done. He’s very passionate
              about what he does and he’s always fun to be
              with.</p>
            </div>
            <div className='div'>
            <img className='pics' src={secondImage} alt="" />
            <h1>Oluleye Stephen</h1>
            <p>Steve gets things done. He’s very passionate
              about what he does and he’s always fun to be
              with.</p>
              
            </div> 
        </div>

    </div>
  )
}

export default Testimonies