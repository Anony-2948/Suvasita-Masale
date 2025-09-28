// HERO WITH NO TEXT & NO EXPLORE BUTTON

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  { id: 'modern-aesthetic', url: '/images/hero2.png', alt: 'Modern and Aesthetic High-Resolution Image' },
  { id: 'candid-natural', url: '/images/hero2.png', alt: 'Candid Photography with Natural Elements' }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const rotateTimer = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(rotateTimer);
  }, []);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % heroImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image.url} alt={image.alt} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-8">
        <button onClick={prevImage} className="group bg-black/30 hover:bg-red-700 p-3 rounded-full backdrop-blur-sm transition-all duration-300">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button onClick={nextImage} className="group bg-black/30 hover:bg-red-700 p-3 rounded-full backdrop-blur-sm transition-all duration-300">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-red-700 w-8' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>

      {/* Rotating Badge */}
      <div className="absolute bottom-8 right-8">
        <div className="relative w-24 h-24 rounded-full bg-yellow-400 shadow-lg overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" style={{ transform: `rotate(${rotation}deg)` }}>
            <defs>
              <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
            </defs>
            <text>
              <textPath href="#circlePath" className="text-xs font-bold" fill="#c91c1c">PREMIUM QUALITY • PREMIUM QUALITY • PREMIUM QUALITY •</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-yellow-400 rounded-full w-16 h-16 flex flex-col items-center justify-center">
              <span className="text-xs font-bold text-red-700">PREMIUM</span>
              <span className="text-xs text-red-700">QUALITY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
