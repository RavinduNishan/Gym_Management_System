import React from 'react'
import { FaDumbbell } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaDumbbell className="text-red-500 text-2xl animate-pulse" />
            <span className="font-bold text-xl">FITPRO GYM</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-red-400 transition duration-300 font-medium">Home</a>
            <a href="#" className="hover:text-red-400 transition duration-300 font-medium">Programs</a>
            <a href="#" className="hover:text-red-400 transition duration-300 font-medium">Schedule</a>
            <a href="#" className="hover:text-red-400 transition duration-300 font-medium">Trainers</a>
            <a href="#" className="hover:text-red-400 transition duration-300 font-medium">Membership</a>
            <a href="/manage-progress" className="hover:text-red-400 transition duration-300 font-medium">Progress Track</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
            Sign In
          </button>
        </div>
      </nav>
  )
}

export default Navbar
