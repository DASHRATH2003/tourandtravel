import { useState, useEffect } from 'react';
import ContactBar from './ContactBar';

const StatCounter = ({ end, duration = 2000, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-5xl font-bold text-white mb-2">
        {count}{end.toString().includes('k') ? 'k+' : '+'}
      </div>
      <div className="text-white text-lg">{label}</div>
    </div>
  );
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://s3.ap-south-1.amazonaws.com/com.travclan.b2b2c/gallery/3545/1743056391.132665/0.29808594053731485/innova-crysta_cream.jpg",
    "https://www.tirupatitourpackagefromchennai.in/wp-content/uploads/2022/05/banner-1.jpg",
    "https://i.pinimg.com/736x/48/d7/8c/48d78c3240b5ae9b91dfa5811a764dd2.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2023/1/YM/LB/OD/2957317/2021-toyota-innova-crysta-zx-automatic-diesel.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/1006/611/desktop-wallpaper-toyota-innova-crysta-innova-car.jpg"
  ];

  const vehicles = [
    {
      id: 1,
      name: "Sedan",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg",
      seats: "4+1 Seats"
    },
    {
      id: 2,
      name: "SUV",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Creta/10544/1689589250319/front-left-side-47.jpg",
      seats: "6+1 Seats"
    },
    {
      id: 3,
      name: "Innova Crysta",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Innova-Crysta/9612/1677913876084/front-left-side-47.jpg",
      seats: "6+1 Seats"
    },
    {
      id: 4,
      name: "Tempo Traveller",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/12/MI/EM/ON/3823480/17-seater-luxury-tempo-traveller-500x500.jpg",
      seats: "12+1 Seats"
    },
    {
      id: 5,
      name: "Mini Bus",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/9/SZ/VB/CR/47767158/27-seater-bus-rental-services-500x500.jpg",
      seats: "20+1 Seats"
    },
    {
      id: 6,
      name: "Luxury Cars",
      image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/S-Class/10858/1690447163011/front-left-side-47.jpg",
      seats: "4+1 Seats"
    }
  ];

  const [activeVehicle, setActiveVehicle] = useState('Sedan');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentClient, setCurrentClient] = useState(0);

  const testimonials = [
    {
      text: "A fantastic journey with SKB Tours and Travels! Their top-notch infrastructure and customer-centric approach made us feel valued throughout the trip.",
      author: "Apeksha"
    },
    {
      text: "Excellent service and professional staff. Made our corporate travel hassle-free.",
      author: "Rahul"
    },
    {
      text: "Best tour operator in the city. Very punctual and reliable service.",
      author: "Priya"
    },
    {
      text: "Great experience with their airport pickup service. Very comfortable and on time.",
      author: "Amit"
    },
    {
      text: "Highly recommend their services. Very professional and customer-friendly approach.",
      author: "Sneha"
    }
  ];

  const clients = [
    {
      name: "Tessolve",
      logo: "https://www.tessolve.com/wp-content/uploads/2019/04/tessolve-logo.png"
    },
    {
      name: "Biocon",
      logo: "https://www.biocon.com/wp-content/themes/biocon/assets/img/biocon-logo.svg"
    },
    {
      name: "Intouch",
      logo: "https://www.intouchsol.com/wp-content/uploads/2019/01/intouch-logo.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentClient((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const nextClient = () => {
    setCurrentClient((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const prevClient = () => {
    setCurrentClient((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };
  
  return (
    <div className="relative">
      <ContactBar />

      {/* Hero Section with Image Carousel */}
      <section className="relative h-[80vh] md:h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Discover Amazing Destinations</h1>
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">At Varshadhaara Tours and Travels pvt ltd, we believe that travel is more than just visiting new places — it's about experiencing cultures, making memories, and discovering yourself. With years of experience in the industry, we offer customized tour packages, seamless bookings, and 24/7 customer support to ensure a hassle-free journey.</p>
            <button className="bg-yellow-500 hover:bg-gray-700 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">
              Explore Packages
            </button>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* Vehicle Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
-          {/* Vehicle Category Tabs */}
         

          {/* Vehicle Display */}
         
        </div>
      </section>

      {/* Stats Section */}
     

      {/* About Us Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 mt-[-50px] md:mt-[-100px]">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">About Us</h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-3 md:space-y-4 text-gray-600">
                <div className="mb-6 md:mb-8">
                  <div className="text-2xl md:text-3xl font-bold text-yellow-600">Experienced Tour Experts</div>
                </div>

                <p className="text-sm md:text-base">
                  Varshadhaara Tours and Travels Pvt. Ltd. was incorporated in 2020 and is located at , Bangalore, Karnataka – 560022.
                </p>
                
                <p className="text-sm md:text-base">
                As your business expands, so do your mobility needs. Our scalable services are designed to grow with you—supporting everything from small team transfers to enterprise-level operations across cities.


                </p>
                <p className="text-sm md:text-base">
                Our operations are powered by smart tracking and scheduling systems, providing real-time updates, route optimization, and detailed reporting to keep your workforce moving smoothly and safely.
                  Varshadhaara Tours and Travels is a company that offers professional, timely, and efficient coordination for corporate transportation and workforce mobility.
                </p>
                <p className="text-sm md:text-base">
                Choose from a wide range of well-maintained vehicles—from premium sedans for executives to AC coaches for larger teams. All our drivers are professionally trained and background-verified, ensuring a secure travel experience.
                  Varshadhaara Tours and Travels is a company that offers professional, timely, and efficient coordination for corporate transportation and workforce mobility.
                </p>
                <p className="text-sm md:text-base">
                  Varshadhaara Tours and Travels is a company that offers professional, timely, and efficient coordination for corporate transportation and workforce mobility.
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg" 
                    alt="Our Office" 
                    className="w-full h-[300px] md:h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. Mobility Solutions */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/car.png" alt="Mobility" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Mobility Solutions</h3>
              <p className="text-gray-600 text-sm">
                One stop solution for anything and everything your business needs. We offer you a plethora of services to choose from and customize your solution with our transportation services to augment across your business.
              </p>
            </div>

            {/* 2. Employee Transportation */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/conference.png" alt="Employee" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Employee Transportation Management</h3>
              <p className="text-gray-600 text-sm">
                We help to achieve the constantly focusing on the safety of your employees to give your company improved productivity in the office.
              </p>
            </div>

            {/* 3. Transparent Operations */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/process.png" alt="Operations" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Transparent Operations</h3>
              <p className="text-gray-600 text-sm">
                With our transparent mode of operation, we keep at productivity and financial predictability, hence the operation remains smooth and unhindered.
              </p>
            </div>

            {/* 4. Passenger Safety */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/shield.png" alt="Safety" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Passenger Safety</h3>
              <p className="text-gray-600 text-sm">
                With our top priority being passenger safety and with our safety policies in place, you can rest at peace with our Live GPS tracking and monitoring system.
              </p>
            </div>

            {/* 5. Real-Time Occupancy */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/clock.png" alt="Real-time" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Real-Time Occupancy Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Monitoring cab occupancy to follow timelines, it's our responsibility to follow government social distancing guidelines to maintain a safe environment for your employees.
              </p>
            </div>

            {/* 6. Automated Safe Drop */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://media.istockphoto.com/id/953520974/vector/tick-mark-approved-icon-shield-vector-on-white-background.jpg?s=612x612&w=0&k=20&c=lalLRIXMNvWP6JuqHjoz_h0q-iQXSgOgI5pztVZ6SN8=" alt="Safe Drop" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Automated Safe Drop Confirmation</h3>
              <p className="text-gray-600 text-sm">
                With immediate notification of driver's fleet assignment and live tracking, we ensure safety during trip execution our technology ensures a complete safety drop for your employees.
              </p>
            </div>

            {/* 7. 24/7 Support */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/customer-support.png" alt="Support" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                India's best customer support team ensures we ensure We offer round-the-clock support and customer care.
              </p>
            </div>

            {/* 8. Cost Effective */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/money-bag.png" alt="Cost" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Cost Effective</h3>
              <p className="text-gray-600 text-sm">
                At SKB, we aim to provide High Quality transportation services in Bangalore at an affordable Price. We ensure giving Quality Services with Effective Cost Solutions.
              </p>
            </div>

            {/* 9. Certified Drivers */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/driver.png" alt="Drivers" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Certified Drivers</h3>
              <p className="text-gray-600 text-sm">
                All the Drivers associated with SKB Services are Certified and trained to take care of Passengers Safety and Regulations.
              </p>
            </div>

            {/* 10. Vehicle Tracking */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/radar.png" alt="Tracking" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Vehicle Tracking</h3>
              <p className="text-gray-600 text-sm">
                You can track the movement of each vehicle in a fleet as they move around the map from one destination to another.
              </p>
            </div>

            {/* 11. Automated Billing */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://img.icons8.com/ios/50/bill.png" alt="Billing" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Automated Billing</h3>
              <p className="text-gray-600 text-sm">
                Everything is precise and clear. You will have legal bills of places you have traveled to with the details of the driver. And the car that used for the trip.
              </p>
            </div>

            {/* 12. Web/Mobile Monitoring */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-200 flex items-center justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95-_8PBew2duvk1E2tKAUxqmuXd4ZMmt0GUGBmKCCWrPjKQl2RdZtfPt4Wxo9qB1RY-k&usqp=CAU" alt="Mobile" className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Web/Mobile Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Inside the user-friendly ETA Automated cab arrival status, GPS tracking & analytics controller supervision for your employees with user-friendly apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages Section */}

      {/* Our Services Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Service Cards - Update each card's padding and image height */}
            {/* Employee Transportation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src="https://uffizio.com/wp-content/uploads/2024/02/Fleets-2.jpg" 
                  alt="Employee Transportation" 
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-2 md:mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Employee Transportation</h3>
                  <button className="bg-black text-white px-4 md:px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h3 className="text-center text-gray-800 font-medium text-sm md:text-base">Employee Transportation</h3>
              </div>
            </div>

            {/* Airport Pickup Drop */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src="https://media.istockphoto.com/id/815708966/photo/female-traveler-picking-up-suitcase-from-baggage-claim-line.jpg?s=612x612&w=0&k=20&c=CU1PEGpfUyfifK2usaU0WBj6o0PAWa5BuoCvzx8yWrA=" 
                  alt="Airport Pickup Drop" 
                  className="w-full h-48 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Airport Pickup Drop</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="" className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-center text-gray-800 font-medium">Airport Pickup Drop</h3>
              </div>
            </div>

            {/* Out Station */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src="https://media.istockphoto.com/id/478695660/photo/train-station-in-kolkata.jpg?s=612x612&w=0&k=20&c=6kyvFegkPLSQzTsW8fYarMmR-5yf7ajIcddXcQyMIIs=" 
                  alt="Out Station" 
                  className="w-full h-48 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Out Station</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="" className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-center text-gray-800 font-medium">Out Station</h3>
              </div>
            </div>

            {/* Tour Packages */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThoNm-MbMWQViHpqiuLHmhHAx0txMetmGEfdhuyHRTkVaqNuszu-71nbQo2rME9E1wL-Y&usqp=CAU" 
                  alt="Tour Packages" 
                  className="w-full h-48 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Tour Packages</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="" className="w-6 h-6" />
                </div>

              </div>
              <div className="p-4">
                <h3 className="text-center text-gray-800 font-medium">Tour Packages</h3>
              </div>
            </div>

            {/* Corporate Tour Services */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src="https://media.istockphoto.com/id/1489123986/photo/travel-for-business-team-at-airport-and-men-catch-flight-for-work-trip-with-conference-or.jpg?s=612x612&w=0&k=20&c=TtfyyN-mkRKAHiOcmNV5IHOWSuL2THEmPgCWXlj7EBM=" 
                  alt="Corporate Tour Services" 
                  className="w-full h-48 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Corporate Tour Services</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="" className="w-6 h-6" />
                </div>

              </div>
              <div className="p-4">
                <h3 className="text-center text-gray-800 font-medium">Corporate Tour Services</h3>
              </div>
            </div>

            {/* Vehicles for Events & Tours */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative">
                <img 
                  src="https://media.istockphoto.com/id/679617450/photo/lake-pichola-rajasthan.jpg?s=612x612&w=0&k=20&c=AtPrOK5vPqzJn8RbpzYxvMhq7Lo7AyOahgvvbwAT7Jo=" 
                  alt="Vehicles for Events & Tours" 
                  className="w-full h-48 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Vehicles for Events & Tours</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="" className="w-6 h-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-center text-gray-800 font-medium">Vehicles for Events & Tours</h3>
              </div>
            </div>

            {/* With App Duty/Without App Duty */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group md:col-start-2">
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709183005/catalog/1621519805890764800/ki2iivaebe2e6oyraplx.webp" 
                  alt="App Duty Services" 
                  className="w-full h-48 object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">With App Duty/Without App Duty</h3>
                  <button className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Know More
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="" className="w-6 h-6" />
                </div>

              </div>
              <div className="p-4">
                <h3 className="text-center text-gray-800 font-medium">With App Duty/Without App Duty</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and Contact Section */}
      <section className="py-8 md:py-16 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Testimonials */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Testimonials</h2>
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg">
                <div className="relative">
                  <div className="overflow-hidden">
                    <div className="text-center">
                      <p className="text-gray-600 text-sm md:text-base mb-4">
                        {testimonials[currentTestimonial].text}
                      </p>
                      <h3 className="font-semibold text-gray-800">
                        {testimonials[currentTestimonial].author}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentTestimonial ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-1">Name *</label>
                    <input 
                      type="text" 
                      placeholder="First" 
                      className="w-full px-3 md:px-4 py-2 rounded-md text-sm md:text-base"
                      required
                    />
                    <div className="text-xs text-white mt-1">First</div>
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-1">&nbsp;</label>
                    <input 
                      type="text" 
                      placeholder="Last" 
                      className="w-full px-3 md:px-4 py-2 rounded-md text-sm md:text-base"
                      required
                    />
                    <div className="text-xs text-white mt-1">Last</div>
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-1">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-1">Phone *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 rounded-md"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm mb-1">Comment or Message *</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-2 rounded-md resize-none"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-white text-red-500 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
    
      {/* Map Section */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Find Us</h2>
          <div className="max-w-6xl mx-auto rounded-lg overflow-hidden shadow-xl">
            <div className="w-full h-64 md:h-96 relative">
              <iframe 
                src="https://www.google.com/maps?q=3rd+Block,+2G9M+Jr5,+7,+2nd+Main+Rd,+Parimala+Nagar,+Nandini+Layout,+Bengaluru,+Karnataka+560096&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Clients Section */}
     
    </div>
  );
};

export default Home;

