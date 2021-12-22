import React from 'react'

export default function Navbar() {
  return (
    <nav className="bg-yellow-600">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-300 hover:text-gray-900">
                <span className="font-bold">Flower Power</span>
              </a>
            </div>
            {/* Primary Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-white hover:text-gray-900">Home</a>
              <a href="#" className="py-5 px-3 text-white hover:text-gray-900">About</a>
              <a href="#" className="py-5 px-3 text-white">Contact Us</a>
            </div>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="" className="py-5 px-3 text-white">Login</a>
            <a href="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-800 hover:text-yellow-800 rounded transition duration-300">Signup</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  )
}