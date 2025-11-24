import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#2D3561] text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-5 gap-8 mb-12">
          {/* About Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Company Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Our Mission & Values
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Customer Service</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Booking Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Last-Minute Deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Travel Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog & Travel Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Feedback & Suggestions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Membership */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Membership</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Loyalty Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Unlock Exclusive Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Rewards & Benefits
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 py-8"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400">
            © 2025 simplerhost. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {/* Twitter */}
            <a
              href="#"
              className="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 0 9 0Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.55 2.046-5.771 6.365-5.771 10.975 0 1.71.372 3.342 1.112 4.856L2.88 21.994l5.59-1.463a9.879 9.879 0 004.719 1.195h.005c5.45 0 9.876-4.426 9.876-9.876 0-2.64-.997-5.121-2.809-6.979-1.879-1.962-4.444-3.04-7.141-3.04" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="bg-blue-700 hover:bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
