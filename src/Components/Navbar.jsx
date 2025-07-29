import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoimage.png';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showPackageDropdown, setShowPackageDropdown] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false);
    setShowServicesDropdown(false);
    setShowPackageDropdown(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const serviceLinks = [
    { name: 'Employee Transportation', path: '/services/employee-transport' },
    { name: 'Airport Pickup Drop', path: '/services/airport-pickup' },
    { name: 'Out Station Service', path: '/services/out-station' },
    { name: 'Tour Package Services', path: '/services/tour-package' },
    { name: 'Corporate Tour Services', path: '/services/corporate-tour' },
    { name: 'Vehicles for Events & Tours', path: '/services/event-vehicles' },
    { name: 'With App Duty/Without App Duty', path: '/services/app-duty' }
  ];

  return (
    <nav className="sticky top-0 left-0 w-full bg-gray-900 shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VARSHADHAARA TOURS AND TRAVELS" className="h-16" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-semibold tracking-wide ${
                isActive('/') ? 'text-white' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`font-semibold tracking-wide ${
                isActive('/about') ? 'text-white' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              ABOUT
            </Link>
            <div className="relative">
              <button
                className={`font-semibold tracking-wide ${
                  location.pathname.includes('/services') ? 'text-white' : 'text-white'
                } hover:text-yellow-500 transition-colors flex items-center`}
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                onMouseEnter={() => setShowServicesDropdown(true)}
              >
                SERVICE
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    showServicesDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Services Dropdown */}
              {showServicesDropdown && (
                <div
                  className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  {serviceLinks.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`block px-4 py-2 text-sm ${
                        isActive(service.path) ? 'text-red-500 bg-gray-50' : 'text-gray-800'
                      } hover:bg-gray-50 hover:text-yellow-500 transition-colors`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <button
                className={`font-semibold tracking-wide ${
                  location.pathname.includes('/package') ? 'text-white' : 'text-white'
                } hover:text-yellow-500 transition-colors flex items-center`}
                onClick={() => setShowPackageDropdown(!showPackageDropdown)}
                onMouseEnter={() => setShowPackageDropdown(true)}
              >
                PACKAGE
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    showPackageDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Package Dropdown */}
              {showPackageDropdown && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                  onMouseLeave={() => setShowPackageDropdown(false)}
                >
                  <Link
                    to="/package/Weddingtour"
                    className={`block px-4 py-2 text-sm ${
                      location.pathname === '/package/Weddingtour' ? 'text-red-500 bg-gray-50' : 'text-gray-800'
                    } hover:bg-gray-50 hover:text-yellow-500 transition-colors`}
                  >
                    Wedding Tour
                  </Link>
                  <Link
                    to="/package/Grouptour"
                    className={`block px-4 py-2 text-sm ${
                      location.pathname === '/package/Grouptour' ? 'text-red-500 bg-gray-50' : 'text-gray-800'
                    } hover:bg-gray-50 hover:text-yellow-500 transition-colors`}
                  >
                    Group Tour
                  </Link>
                  <Link
                    to="/package/Honeymoontour"
                    className={`block px-4 py-2 text-sm ${
                      location.pathname === '/package/Honeymoontour' ? 'text-red-500 bg-gray-50' : 'text-gray-800'
                    } hover:bg-gray-50 hover:text-yellow-500 transition-colors`}
                  >
                    Honeymoon Tour
                  </Link>
                </div>
              )}
            </div>
           
            <Link
              to="/carlist"
              className={`font-semibold tracking-wide ${
                isActive('/carlist') ? 'text-white' : 'text-white'
              } hover:text-yellow-500 transition-colors`}
            >
              CAR LISTING
            </Link>
            <Link
              to="/contact"
              className="bg-yellow-500 text-white px-6 py-2.5 rounded-full text-sm tracking-wide hover:bg-gray-500 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showMobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            showMobileMenu ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={`text-sm ${
                isActive('/') ? 'text-red-500' : 'text-gray-800'
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`text-sm ${
                isActive('/about') ? 'text-red-500' : 'text-gray-800'
              }`}
            >
              ABOUT
            </Link>
            <div>
              <button
                className={`text-sm w-full text-left flex justify-between items-center ${
                  location.pathname.includes('/services') ? 'text-red-500' : 'text-gray-800'
                }`}
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                SERVICE
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showServicesDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`pl-4 mt-2 space-y-2 ${
                  showServicesDropdown ? 'block' : 'hidden'
                }`}
              >
                {serviceLinks.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`block text-sm ${
                      isActive(service.path) ? 'text-red-500' : 'text-gray-800'
                    }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <button
                className={`text-sm w-full text-left flex justify-between items-center ${
                  location.pathname.includes('/package') ? 'text-red-500' : 'text-gray-800'
                }`}
                onClick={() => setShowPackageDropdown(!showPackageDropdown)}
              >
                PACKAGE
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showPackageDropdown ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Mobile Menu Package Links */}
              <div
                className={`pl-4 mt-2 space-y-2 ${
                  showPackageDropdown ? 'block' : 'hidden'
                }`}
              >
                <Link
                  to="/package/Weddingtour"
                  className={`block text-sm ${
                    location.pathname === '/package/Weddingtour' ? 'text-red-500' : 'text-gray-800'
                  } hover:text-yellow-500 transition-colors`}
                >
                  Wedding Tour
                </Link>
                <Link
                  to="/package/Grouptour"
                  className={`block text-sm ${
                    location.pathname === '/package/Grouptour' ? 'text-red-500' : 'text-gray-800'
                  } hover:text-yellow-500 transition-colors`}
                >
                  Group Tour
                </Link>
                <Link
                  to="/package/Honeymoontour"
                  className={`block text-sm ${
                    location.pathname === '/package/Honeymoontour' ? 'text-red-500' : 'text-gray-800'
                  } hover:text-yellow-500 transition-colors`}
                >
                  Honeymoon Tour
                </Link>
              </div>
            </div>
            <Link
              to="/cartlist"
              className={`text-sm ${
                isActive('/cartlist') ? 'text-red-500' : 'text-gray-800'
              }`}
            >
              CARTLIST
            </Link>
            <Link
              to="/carlist"
              className={`text-sm ${
                isActive('/carlist') ? 'text-red-500' : 'text-gray-800'
              }`}
            >
              CAR LISTING
            </Link>
            <Link
              to="/contact"
              className="bg-red-500 text-white px-6 py-2.5 rounded-full text-sm inline-block text-center hover:bg-red-600"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;