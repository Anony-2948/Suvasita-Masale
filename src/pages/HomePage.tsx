import React from 'react';
import Hero from '../components/Hero';
import ProductSlider from '../components/ProductSlider';
import Highlights from '../components/Highlights';
import AboutUs from '../components/AboutUs';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ProductSlider />
      <Highlights />
      <AboutUs />
    </main>
  );
};

export default HomePage;