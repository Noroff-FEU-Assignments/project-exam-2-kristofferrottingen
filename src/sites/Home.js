import React from 'react';
import Hero from '../components/home/Hero';
import HomeProducts from '../components/home/HomeProducts';
import About from '../components/home/About';
import ShareOnSocials from '../components/home/Sos';

function Home() {
  return (
    <>
        <Hero />
        <HomeProducts />
        <About />
        <ShareOnSocials />
    </>
  )
}

export default Home