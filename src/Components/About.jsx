import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo22.webp';

const CountUpNumber = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}</span>;
};

const About = () => {
  const stats = [
    { number: 250, label: 'Vehicles' },
    { number: 4500, label: 'Users' },
    { number: 1500, label: 'Trips' },
    { number: 9, label: 'Years of Experience' }
  ];

  return (
    <div className="pt-20">
      {/* About Us Header */}
      <div className="bg-yellow-500 py-16 mt-[-100px] relative">
        <h1 className="text-5xl font-bold text-white text-center">About Us</h1>
        
        {/* Social Links */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-2">
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a 
              href="tel:your-number" 
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a 
              href="mailto:your-email" 
              className="bg-black text-white p-3 hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Logo Side */}
          <div className="md:w-1/2">
            <img 
              src={logo} 
              alt="VARSHADHAARA TOURS AND TRAVELS PVT LTD" 
              className="w-full max-w-lg mx-auto"
            />
          </div>

          {/* Text Side */}
          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg leading-relaxed">
              VARSHADHAARA TOURS AND TRAVELS PVT LTD is a company that serves business and clients who require professional, friendly and efficient organization of their outbound and inbound travel & tourism needs. We are known for providing quality services and have maintained a disciplined and friendly relationship with the company and the employees.
            </p> <br />
           
           <p>Looking for a travel partner who understands your needs? We bring you tailor-made domestic and international packages, corporate travel solutions, and unmatched customer support. Your perfect journey starts with us – professional, reliable, and always one step ahead.</p>
          </div> <br />
          
          
        </div>

        {/* Stats Section */}
        <div className="bg-yellow-400 py-16 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-5xl font-bold mb-2">
                    <CountUpNumber end={stat.number} />
                    {stat.number !== 9 && '+'}
                  </div>
                  <div className="text-xl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
            <div className="flex flex-col gap-2">
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
              <a 
                href="tel:your-number" 
                className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
              >
                <i className="fas fa-phone text-2xl"></i>
              </a>
              <a 
                href="mailto:your-email" 
                className="bg-black text-white p-3 hover:bg-gray-800 transition-colors"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Objective and Operations Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Objective */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Objective</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                Proactively understand and meet client needs by constantly challenging ourselves to adopt innovative mobility solutions that will revolutionise the industry. Maintain constant and longterm quality standards. Guarantee value of money to customers. Our dedication to providing prompt and effective service has contributed to the growth of our loyal customer base
              </p>
            </div>

            {/* Our Operations */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Our Operations</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                By operating 24 hours a day and 365 days in a year we ensure no demands go unattended, unsatisfied. In order to ensure error free and smooth service, we have appointed staffs specially to look over the operations of vehicles and will respond to any queries immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <i className="fas fa-users text-4xl text-yellow-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Dedicated professionals with years of experience in travel industry</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <i className="fas fa-clock text-4xl text-yellow-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock assistance for all your travel needs</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg">
            <i className="fas fa-shield-alt text-4xl text-yellow-400 mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
            <p className="text-gray-600">Your safety is our top priority during all journeys</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col gap-2">
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 hover:bg-green-600 transition-colors"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </a>
            <a 
              href="tel:your-number" 
              className="bg-blue-500 text-white p-3 hover:bg-blue-600 transition-colors"
            >
              <i className="fas fa-phone text-2xl"></i>
            </a>
            <a 
              href="mailto:your-email" 
              className="bg-black text-white p-3 hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;