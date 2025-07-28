import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="tel:+919876543210" className="flex items-center space-x-2 text-sm hover:text-red-500 transition-colors">
              <FaPhone className="text-red-500" />
              <span>+91 9916599719</span>
            </a>
            <a href="mailto:info@varshadhaara.com" className="flex items-center space-x-2 text-sm hover:text-red-500 transition-colors">
              <FaEnvelope className="text-red-500" />
              <span>infovtt@varshadhaaratours</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-red-500 transition-colors"
            >
              <FaInstagram />
            </a>

             <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-blue-400 transition-colors"
  >
    <FaTwitter />
  </a>

              <a 
    href="https://youtube.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-red-600 transition-colors"
  >
    <FaYoutube />
  </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;