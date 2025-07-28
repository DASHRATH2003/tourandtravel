import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/logoimage.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="VARSHADHAARA TOURS AND TRAVELS PVT LTD" className="h-16 mb-4" />
            </div>
           <p>Discover the world like never before with our thoughtfully crafted tour packages that blend adventure, comfort, and unforgettable memories. Whether you're seeking spiritual journeys.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/package" className="hover:text-white transition-colors">Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/employee-transport" className="hover:text-white transition-colors">
                  Employee Transportation
                </Link>
              </li>
              <li>
                <Link to="/services/airport-pickup" className="hover:text-white transition-colors">
                  Airport Pickup Drop
                </Link>
              </li>
              <li>
                <Link to="/services/out-station" className="hover:text-white transition-colors">
                  Out Station
                </Link>
              </li>
              <li>
                <Link to="/services/tour-package" className="hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-tour" className="hover:text-white transition-colors">
                  Corporate Tour Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>#7 2nd main road. 3rd Block  Goragunteplya  Bangalore  560022</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0" />
                <span>+91 9916599719</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0" />
                <span>infovtt@varshadhaaratours.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} VARSHADHAARA TOURS AND TRAVELS PVT LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;