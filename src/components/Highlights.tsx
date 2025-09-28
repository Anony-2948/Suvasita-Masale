import React from 'react';
import { Leaf, Shield, Award, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Leaf,
    title: 'Authentic Spices',
    description: 'Carefully sourced from the finest farms across India'
  },
  {
    icon: Shield,
    title: 'Non-Toxic & Preservative-Free',
    description: 'Pure, natural ingredients with no artificial additives'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Rigorous quality control for the finest spice experience'
  },
  {
    icon: Heart,
    title: 'Ethically Sourced',
    description: 'Supporting local farmers and sustainable practices'
  }
];

const Highlights = () => {
  return (
    <section className="py-24 bg-[#FAF3E0] relative overflow-hidden">
      <div className="absolute inset-0 spice-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C0392B] font-medium mb-2 block">Why Choose Us</span>
          <h2 className="text-4xl font-bold text-[#4E342E] mb-6">
            The Perfect Blend of Quality & Tradition
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We take pride in delivering the finest spices that bring authentic flavors
            to your kitchen while maintaining the highest standards of quality and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#C0392B] to-[#E74C3C] rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#4E342E] mb-4 group-hover:text-[#C0392B] transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;