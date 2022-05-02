import React from 'react';
import Header from '../text/Heading';
import Button from '../Button';
import heroImage from '../../images/logo-stående.png';


function Hero() {
  return (
    <div className='hero-section'>
        <div className='hero-content'>  
            <img src={heroImage} alt='hero img'></img>
            <Header title="Ditt favoritt sykkelmerke" />
            <Button className='btn-brown' text='Produkter'/>
        </div>
        <div className='overlay'></div>
    </div>
  )
}

export default Hero