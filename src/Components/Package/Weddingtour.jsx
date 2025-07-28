import React from 'react';

const Weddingtour = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="bg-yellow-500 py-16 mt-[-100px] relative">
        <h1 className="text-5xl font-bold text-white text-center">Wedding Tour Package</h1>

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

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                VARSHADHAARA TOURS AND TRAVELS provides luxurious and memorable wedding tour packages. We ensure every detail is taken care of, making your special day truly unforgettable with our premium services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our wedding tour packages are designed to provide you and your guests with a seamless and comfortable experience. We handle all transportation needs with style and elegance.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">Luxury Vehicle Fleet</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">Professional Coordination</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">Customized Decorations</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-yellow-500"></i>
                  <span className="text-gray-700">24/7 Support Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img 
              src="https://thumbs.dreamstime.com/b/beach-wedding-canopy-set-up-ocean-background-54592547.jpg " 
              alt="Wedding Tour Service" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-car-side"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fleet Monitoring</h3>
            <p className="text-gray-600">Real-time vehicle tracking for timely service</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Available round the clock for your convenience</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-yellow-500 text-4xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Meet & Greet</h3>
            <p className="text-gray-600">Professional coordination at your venue</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">   
            {/* Car Image Side */}
            <div className="md:w-1/2">                                         
              <div className="bg-gray-100 rounded-lg p-8">
                <img 
                  src="https://5.imimg.com/data5/SELLER/Default/2023/4/303877884/JD/MA/FW/38978360/innova-crysta-wedding-car-rental-service.jpeg" 
                  alt="Luxury Wedding Car" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Form Side */}
            <div className="md:w-1/2">
              <form className="space-y-6">
                {/* Name Fields */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Name <span className="text-yellow-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email <span className="text-yellow-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone <span className="text-yellow-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Comment or Message <span className="text-yellow-500">*</span>
                  </label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-block bg-white text-yellow-500 border-2 border-red-500 px-8 py-2.5 rounded font-medium hover:bg-gray-500 hover:text-white transition-colors duration-300"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weddingtour;
