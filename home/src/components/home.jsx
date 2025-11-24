import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("stays");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6">
        <div className="container mx-auto grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Explore your place to stay!
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              We provide a variety of the best lodging accommodations for those of you who need it.
            </p>

            {/* Start Search Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mb-12 transition">
              <Search size={20} />
              Start your search
            </button>

            {/* Tabs */}
            <div className="flex gap-8 mb-8">
              <button
                onClick={() => setActiveTab("stays")}
                className={`pb-2 font-medium border-b-2 transition ${
                  activeTab === "stays"
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Stays
              </button>
              <button
                onClick={() => setActiveTab("experiences")}
                className={`pb-2 font-medium border-b-2 transition ${
                  activeTab === "experiences"
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Experiences
              </button>
              <button
                onClick={() => setActiveTab("rental")}
                className={`pb-2 font-medium border-b-2 transition ${
                  activeTab === "rental"
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                Rental car
              </button>
            </div>

            {/* Search Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Check in</label>
                  <input
                    type="date"
                    placeholder="Add date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-medium mb-2">Check out</label>
                  <input
                    type="date"
                    placeholder="Add date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="block text-gray-800 font-medium mb-2">Guests</label>
                    <input
                      type="text"
                      placeholder="Add guests"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full mt-6 transition">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
                alt="Beach resort"
                className="rounded-lg w-full h-40 object-cover shadow-lg hover:shadow-xl transition"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                alt="Mountain view"
                className="rounded-lg w-full h-40 object-cover shadow-lg hover:shadow-xl transition"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop"
                alt="Sunset resort"
                className="rounded-lg w-full h-40 object-cover shadow-lg hover:shadow-xl transition"
              />
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
                alt="Mountain landscape"
                className="rounded-lg w-full h-40 object-cover shadow-lg hover:shadow-xl transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Listings Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore our listings
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo
            </p>
          </div>

          {/* Listings Grid */}
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={`https://images.unsplash.com/photo-${1559827260 + item * 1000}?w=400&h=300&fit=crop`}
                    alt={`Listing ${item}`}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Beautiful Beachfront Villa
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Stunning ocean views with private beach access
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">$250</span>
                    <span className="text-yellow-500">★★★★★</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it work
            </h2>
            <p className="text-gray-600 text-lg">
              Những địa điểm thường đến mà Luxstay
            </p>
          </div>

          
          <div className="grid grid-cols-3 gap-8 mb-16">
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg
                  className="w-32 h-32"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="95" fill="#E0F2FE" />
                  <circle cx="100" cy="60" r="20" fill="#FCD34D" />
                  <path d="M 60 120 Q 100 150 140 120" stroke="#06B6D4" strokeWidth="4" fill="none" />
                  <rect x="50" y="130" width="100" height="40" fill="#06B6D4" />
                  <path d="M 70 130 L 70 160" stroke="#ffffff" strokeWidth="2" />
                  <path d="M 100 130 L 100 160" stroke="#ffffff" strokeWidth="2" />
                  <path d="M 130 130 L 130 160" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Book & relax</h3>
              <p className="text-gray-600">
                Let each trip be an inspirational journey, each room a peaceful space
              </p>
            </div>

            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg
                  className="w-32 h-32"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="95" fill="#E0F2FE" />
                  <circle cx="100" cy="50" r="18" fill="#FCD34D" />
                  <path d="M 70 100 L 85 120 L 115 70" stroke="#06B6D4" strokeWidth="4" fill="none" />
                  <rect x="60" y="130" width="80" height="35" rx="5" fill="#06B6D4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart checklist</h3>
              <p className="text-gray-600">
                Let each trip be an inspirational journey, each room a peaceful space
              </p>
            </div>

            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <svg
                  className="w-32 h-32"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="95" fill="#E0F2FE" />
                  <circle cx="100" cy="50" r="18" fill="#FCD34D" />
                  <rect x="50" y="80" width="100" height="60" rx="5" fill="#06B6D4" />
                  <circle cx="80" cy="120" r="8" fill="#ffffff" />
                  <circle cx="120" cy="120" r="8" fill="#ffffff" />
                  <path d="M 80 135 L 120 135" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Save more</h3>
              <p className="text-gray-600">
                Let each trip be an inspirational journey, each room a peaceful space
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Join our newsletter 🎉
            </h2>

            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Get more discount</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Lorem ipsum</h3>
                </div>
              </div>
            </div>

            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Example@gmail.com"
                className="flex-1 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          
          <div className="flex justify-center">
            <svg
              className="w-full max-w-md h-auto"
              viewBox="0 0 400 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <ellipse cx="200" cy="350" rx="180" ry="120" fill="#FDD7E6" />

             
              <rect x="80" y="280" width="240" height="30" fill="#06B6D4" rx="4" />
              <rect x="75" y="260" width="250" height="30" fill="#0891B2" rx="4" />
              <rect x="70" y="240" width="260" height="30" fill="#06B6D4" rx="4" />

              
              <circle cx="140" cy="180" r="20" fill="#F4A582" />
              <rect x="120" y="205" width="40" height="35" fill="#D4AF37" />
              <rect x="115" y="240" width="50" height="40" fill="#1F2937" />

              
              <circle cx="260" cy="160" r="22" fill="#F4A582" />
              <path d="M 245 190 L 275 190 L 275 230 Q 260 245 245 230 Z" fill="#A7D8DE" />
              <rect x="240" y="230" width="40" height="45" fill="#1F2937" />

              
              <circle cx="200" cy="320" r="18" fill="#F4A582" />
              <rect x="185" y="345" width="30" height="30" fill="#FBBF24" />
              <rect x="180" y="375" width="40" height="35" fill="#1F2937" />

              
              <circle cx="340" cy="50" r="25" fill="#FCD34D" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
