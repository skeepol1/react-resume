import React from 'react'
import './Services.css'
import bootstrap from '../../src/image/bootstrap.svg';
import css from '../../src/image/css.svg';
import git from '../../src/image/git.svg';
import html from '../../src/image/html.svg';
import javascript from '../../src/image/javascript.svg';
import react from '../../src/image/react.svg';
import ServicesRendered from './ServicesRendered';

function Services() {
  return (
  <div className='Services'>
      
        <h2>Services I Rendered</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
        elit.Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>



      <div className='topRendered'>
        <ServicesRendered myImage={bootstrap} text={'Training'} smallText={'I offer instructor-led training in a way that fits with the way you work. '} />
        <ServicesRendered myImage={css} text={'Responsive Web Design'} smallText={'I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better.'} />
        <ServicesRendered myImage={git} text={'Web Development'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.'} />
        <ServicesRendered myImage={html} text={'QGIS Mapping'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.'}/>
        <ServicesRendered myImage={javascript} text={'Training'} smallText={'I offer instructor-led training in a way that fits with the way you work. '}/>
        <ServicesRendered myImage={react} text={'Graphics Design'} smallText={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.'}/>
      
      </div>

      

      

    
     
        



    
    

     
      
      
      
      


 

  </div>
    
              
           
  )
}

export default Services