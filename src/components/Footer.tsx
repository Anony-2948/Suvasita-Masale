import React from 'react';
import { Facebook, Instagram, Twitter, Send, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white relative overflow-hidden">
      <div className="absolute inset-0 spice-pattern opacity-5"></div>
      
      <div className="relative">
        {/* Newsletter Section */}
        <div className="bg-[#C0392B] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white/80">
                  Subscribe to receive updates and special offers.
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-80 px-6 py-4 rounded-l-full bg-white text-gray-900 focus:outline-none"
                />
                <button className="px-8 py-4 bg-[#4E342E] hover:bg-[#3A2723] rounded-r-full transition-colors duration-200 flex items-center">
                  Subscribe
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Send className="w-6 h-6 text-[#C0392B]" />
                </div>
                <h3 className="text-xl font-bold ml-3">Suvasita Masale</h3>
              </div>
              <p className="text-white/80 leading-relaxed">
                Bringing authentic flavors to your kitchen with premium quality spices,
                sourced directly from the finest farms across India.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-[#C0392B] rounded-full mr-3"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-[#C0392B] rounded-full mr-3"></span>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-[#C0392B] rounded-full mr-3"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center">
                    <span className="w-2 h-2 bg-[#C0392B] rounded-full mr-3"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#C0392B] mt-1 mr-3" />
                  <span className="text-white/80">
                    Gut no 34 At Post, in front of<br />
                    Bhavani Mata Temple, Umra,<br />
                    tq.Kalmnuri Dist.Hingoli
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#C0392B] mr-3" />
                  <span className="text-white/80">+91 84462 40203</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[#C0392B] mr-3" />
                  <span className="text-white/80">suvasitamasale@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C0392B] transition-colors duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C0392B] transition-colors duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C0392B] transition-colors duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/80 text-sm">
                © 2025 Suvasita Masale. All rights reserved.
              </div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
