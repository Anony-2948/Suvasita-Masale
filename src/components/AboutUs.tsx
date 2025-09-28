import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-[#C0392B] font-medium mb-2 block">Our Story</span>
              <h2 className="text-4xl font-bold text-[#4E342E] mb-6">
                The Perfect Blend of Quality & Tradition
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                We take pride in offering authentic, high-quality spices sourced from the best farms across India, ensuring rich, traditional flavors in every dish. Our spices are crafted with natural, non-toxic ingredients, free from artificial additives or preservatives.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Committed to sustainability, we support ethical sourcing practices that benefit local farmers and promote responsible agriculture. By choosing our products, you're not only enhancing your cooking but also supporting a more sustainable and environmentally conscious spice production process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
              <button className="bg-[#C0392B] hover:bg-[#E74C3C] text-white px-8 py-4 rounded-full font-medium transition-all duration-300">
                Learn More About Us
              </button>
              <button className="bg-transparent text-[#4E342E] px-8 py-4 rounded-full font-medium border-2 border-[#4E342E] hover:bg-[#4E342E] hover:text-white transition-all duration-300">
                Watch Our Story
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <a href="/images/flavour.jpg" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/flavour.jpg"
                  alt="Various colorful Indian spices laid out on a white wooden surface"
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-[#F4A62A] w-32 h-32 rounded-lg flex items-center justify-center transform rotate-12">
              <div className="text-center transform -rotate-12">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-lg text-white font-medium">Pure &</div>
                <div className="text-lg text-white font-medium">Natural</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
