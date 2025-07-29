import React from 'react';

const TourPackage = () => {
  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="bg-yellow-500 mt-[-100px] py-16 relative">
        <h1 className="text-5xl font-bold text-white text-center">Tour Package Services</h1>
        
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
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      VARSHADHAARA TOURS AND TRAVELS offers comprehensive tour packages designed to give you the best travel experience. From weekend getaways to extended vacations, we curate perfect itineraries that cater to all your travel needs.
    </p>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Our tour packages include carefully selected accommodations, comfortable transportation, guided sightseeing, and all necessary arrangements to make your journey memorable and hassle-free.
    </p>
    <br />
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Our tour packages are thoughtfully crafted to include premium accommodations, smooth and safe transportation, expert-guided sightseeing, and complete travel arrangements—ensuring a memorable and worry-free experience for every traveler.
    </p>
   
  </div>
</div>


          {/* Image */}
          <div className="md:w-1/2">
            <img 
              src="https://www.ayodhyatourism.online/assets/images/ayodhya-temple.webp" 
              alt="Tour Package" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Itineraries</h3>
            <p className="text-gray-600">Personalized travel plans for your needs</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-hotel"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Stays</h3>
            <p className="text-gray-600">Comfortable and verified accommodations</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
            <p className="text-gray-600">Professional and knowledgeable tour guides</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-24">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Tour Image Side */}
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg p-8">
                <img 
                  src="https://i.pinimg.com/736x/c3/40/81/c34081613bd982d39c553f84354233b7.jpg" 
                  alt="Tour Location" 
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
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">First</div>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        required
                      />
                      <div className="text-sm text-gray-600 mt-1">Last</div>
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 mb-1">
                    Comment or Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="inline-block bg-white text-red-500 border-2 border-red-500 px-8 py-2.5 rounded font-medium hover:bg-red-500 hover:text-white transition-colors duration-300"
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

export default TourPackage; 