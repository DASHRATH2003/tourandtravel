import React from 'react';
import { Link } from 'react-router-dom';

const CarList = () => {
  // Car data based on the image
  const cars = [
    {
      id: 1,
      name: 'Etios or Desire (Sedan)',
      image: '/images/cars/whiteinnova.jpg',
      seats: 4
    },
    {
      id: 2,
      name: 'Innova or Ertiga or Xylo (SUV)',
      image: '/images/cars/suv.png',
      seats: 7
    },
    {
      id: 3,
      name: 'Innova Crysta (SUV Prime)',
      image: '/images/cars/endsuv.png',
      seats: 7
    },
    {
      id: 4,
      name: 'Innova Hycross Hybrid (SUV Luxury)',
      image: '/images/cars/6th.jpeg',
      seats: 7
    },
    {
      id: 5,
      name: 'Force Traveller (Non-AC)',
      image: '/images/cars/force22.avif',
      seats: 12
    },
    {
      id: 6,
      name: 'Force Traveller (AC)',
      image: '/images/cars/4suv.jpg',
      seats: 12
    },
    {
      id: 7,
      name: 'Mini Bus (Non-AC)',
      image: '/images/cars/9th.jpeg',
      seats: 21
    },
    {
      id: 8,
      name: 'Mini Bus (AC)',
      image: '/images/cars/8thsuv.jpeg',
      seats: 21
    },
    {
      id: 9,
      name: 'Mini Bus 25 Seater (Non-ac)',
      image: '/images/cars/11.avif',
      seats: 25
    },
    {
      id: 10,
      name: 'Mini Bus 25 Seater (AC)',
      image: '/images/cars/12.jpeg',
      seats: 25
    },
    {
      id: 11,
      name: 'Mini Bus 33 Seater (Non-ac)',
      image: '/images/cars/11.avif',
      seats: 33
    },
    {
      id: 12,
      name: 'Mini Bus 33 Seater (AC)',
      image: '/images/cars/last.jpg',
      seats: 33
    }
  ];

  return (
    <div className="bg-gray-100  py-16">
      <div className="container mx-auto px-4">
        {/* Header with background image */}
        <div className="relative mb-12  -mt-16 -ml-4  -mr-4 overflow-hidden">
          <img src="/images/cars/car-header-bg.svg" alt="Car Listing Header" className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Car Listing</h1>
            <div className="flex justify-center items-center text-white">
              <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
              <span className="mx-2">•</span>
              <span>Car Listing</span>
            </div>
          </div>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = '/images/cars/car-placeholder.svg';
                  }}
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                  {car.seats} seats
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CarList;