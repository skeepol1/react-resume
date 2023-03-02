import React from 'react'

function ServicesRendered({myImage, text, smallText}) {
  return (
    <div className='Myservices'>
        <img src={myImage} alt="mine" />
        <h3> {text} </h3>
        <p>{smallText} </p>
    </div>
  )
}

export default ServicesRendered