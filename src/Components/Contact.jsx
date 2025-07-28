import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import ContactBar from './ContactBar';

const Contact = () => {
  return (
    <div className="pt-20">
      <ContactBar />
      
      {/* Header */}
      <div className="bg-yellow-500 py-16 mt-[-80px]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Contact Us</h1>
          <p className="text-white text-center mt-4 max-w-2xl mx-auto">
            Get in touch with us for all your travel needs. We're here to make your journey comfortable and memorable.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    3rd Block, 7, 2nd Main Rd, Parimala Nagar,<br />
                    Nandini Layout, Bengaluru,<br />
                    Karnataka - 560096
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Phone Number</h3>
                  <p className="text-gray-600">+91 9916599719</p>
                  <p className="text-gray-600">+91 9686844478</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Email Address</h3>
                  <p className="text-gray-600">info@varshadhaara.com</p>
                  <p className="text-gray-600">booking@varshadhaara.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 text-white p-3 rounded-full">
                  <FaClock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white p-3 rounded-full">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-1">WhatsApp</h3>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">Available 24/7 for booking inquiries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Send Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=3rd+Block,+2G9M+Jr5,+7,+2nd+Main+Rd,+Parimala+Nagar,+Nandini+Layout,+Bengaluru,+Karnataka+560096&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 