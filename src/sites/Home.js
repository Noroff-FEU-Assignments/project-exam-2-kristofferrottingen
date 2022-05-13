import React from 'react';
import Hero from '../components/home/Hero';
import HomeProducts from '../components/home/HomeProducts';
import About from '../components/home/About';
import ShareOnSocials from '../components/home/Sos';
import Navs from '../components/navbars/Navbar';

function Home() {
  return (
    <>
      <Navs />
      <Hero />
      <HomeProducts />
      <About />
      <ShareOnSocials />
    </>
  )
}

export default Home