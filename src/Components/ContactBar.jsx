import React from 'react';

const ContactBar = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col">
      <a
        href="https://wa.me/+919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 hover:bg-green-600 transition-colors flex items-center"
        style={{ borderTopLeftRadius: '8px' }}
      >
        <i className="fab fa-whatsapp text-2xl"></i>
      </a>
      <a
        href="tel:+919876543210" // Replace with your phone number
        className="bg-blue-500 text-white p-4 hover:bg-blue-600 transition-colors flex items-center"
      >
        <i className="fas fa-phone text-2xl"></i>
      </a>
      <a
        href="mailto:info@varshadhaara.com" // Replace with your email
        className="bg-black text-white p-4 hover:bg-gray-800 transition-colors flex items-center"
        style={{ borderBottomLeftRadius: '8px' }}
      >
        <i className="fas fa-envelope text-2xl"></i>
      </a>
    </div>
  );
};

export default ContactBar; 