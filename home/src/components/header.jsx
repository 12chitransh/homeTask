import React from "react";

export default function Header() {
  return (
    <header className="relative bg-[#1E2348] text-white pb-8">
      <nav className="container mx-auto flex items-center justify-between py-6 px-6">
        
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <circle cx="20" cy="20" r="18" fill="none" stroke="#06B6D4" strokeWidth="2" />
             
              <path
                d="M 20 10 L 30 18 L 28 18 L 28 28 L 12 28 L 12 18 L 10 18 Z"
                fill="none"
                stroke="#06B6D4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
             
              <rect x="18" y="20" width="4" height="8" fill="none" stroke="#06B6D4" strokeWidth="1.5" />
             
              <circle cx="21.5" cy="24" r="0.8" fill="#06B6D4" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold text-cyan-400">SIMPLER</div>
            <div className="text-lg font-bold text-white">GHOST</div>
          </div>
        </div>

        
        <ul className="flex items-center gap-8 font-medium text-sm">
          <li className="hover:text-gray-300 cursor-pointer transition">Search Hotel</li>
          <li className="hover:text-gray-300 cursor-pointer transition">Your Booking</li>
          <li className="hover:text-gray-300 cursor-pointer transition">Trips</li>
          <li className="hover:text-gray-300 cursor-pointer transition">About us</li>
          <li className="hover:text-gray-300 cursor-pointer transition">Login</li>
          <li className="text-gray-300 cursor-pointer transition">Signup</li>
        </ul>
      </nav>

     
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </header>
  );
}
