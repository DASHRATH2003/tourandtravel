import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCar, FaHome, FaInfoCircle, FaCarSide, FaPlane, FaPhoneAlt, FaUsers, FaHeart } from 'react-icons/fa';
import { GiLovers } from 'react-icons/gi';
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
            <p className="mb-4">Discover the world like never before with our thoughtfully crafted tour packages that blend adventure, comfort, and unforgettable memories. Your trusted travel partner since 2015, providing exceptional service across Karnataka.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors text-xl">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="https://wa.me/919916599719" target="_blank" rel="noopener noreferrer" 
                className="hover:text-yellow-400 transition-colors text-xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaHome className="text-yellow-400" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaInfoCircle className="text-yellow-400" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/carlist" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCarSide className="text-yellow-400" />
                  <span>Car Listing</span>
                </Link>
              </li>
              <li>
                <Link to="/package" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaPlane className="text-yellow-400" />
                  <span>Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaPhoneAlt className="text-yellow-400" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/package/Weddingtour" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaHeart className="text-yellow-400" />
                  <span>Wedding Tour</span>
                </Link>
              </li>
              <li>
                <Link to="/package/Grouptour" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaUsers className="text-yellow-400" />
                  <span>Group Tour</span>
                </Link>
              </li>
              <li>
                <Link to="/package/Honeymoontour" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <GiLovers className="text-yellow-400" />
                  <span>Honeymoon Tour</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/employee-transport" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>Employee Transportation</span>
                </Link>
              </li>
              <li>
                <Link to="/services/airport-pickup" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>Airport Pickup & Drop</span>
                </Link>
              </li>
              <li>
                <Link to="/services/out-station" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>Out Station Tours</span>
                </Link>
              </li>
              <li>
                <Link to="/services/tour-package" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/services/corporate-tour" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>Corporate Tours</span>
                </Link>
              </li>
              <li>
                <Link to="/services/event-vehicles" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>Event & Wedding Cars</span>
                </Link>
              </li>
              <li>
                <Link to="/services/app-duty" className="hover:text-yellow-400 transition-colors flex items-center space-x-2">
                  <FaCar className="text-yellow-400" />
                  <span>App Duty Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-yellow-400" />
                <span>#7 2nd main road, 3rd Block<br />Goraguntepalya<br />Bangalore - 560022</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="flex-shrink-0 text-yellow-400" />
                <div className="flex flex-col">
                  <a href="tel:+919916599719" className="hover:text-yellow-400 transition-colors">+91 9916599719</a>
                  <a href="tel:+919916599719" className="hover:text-yellow-400 transition-colors">+91 9916599719</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="flex-shrink-0 text-yellow-400" />
                <a href="mailto:infovtt@varshadhaaratours.com" className="hover:text-yellow-400 transition-colors">
                  infovtt@varshadhaaratours.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="flex-shrink-0 text-yellow-400" />
                <div className="flex flex-col">
                  <span>Mon - Sun: 24/7 Available</span>
                  <span>Emergency Service Available</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} VARSHADHAARA TOURS AND TRAVELS PVT LTD. All rights reserved. | 
              <span className="ml-2">Designed with ❤️ for better travel experiences</span>
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-yellow-400 font-semibold"> Powered By</span>
              <a 
                href="https://www.innomatricstech.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-yellow-400 font-bold hover:text-white transition-colors"
              >
                INNOMATRICS TECH
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;