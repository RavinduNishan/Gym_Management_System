import React from 'react'
import { FaDumbbell } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <FaDumbbell className="text-red-500 text-2xl" />
                <span className="font-bold text-xl">FITPRO GYM</span>
              </div>
              <p className="text-blue-200 mb-4">
                Your premier fitness destination for achieving your health and wellness goals.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a key={social} href="#" className="text-blue-200 hover:text-white transition duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center">
                      <div className="w-5 h-5 bg-current rounded-full"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Classes', 'Trainers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-200 hover:text-white transition duration-300 flex items-center">
                      <IoIosArrowForward className="mr-2 text-red-500" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Hours</h3>
              <ul className="space-y-3">
                <li className="text-blue-200 flex items-start">
                  <span className="inline-block w-24">Monday - Friday:</span>
                  <span>5am - 11pm</span>
                </li>
                <li className="text-blue-200 flex items-start">
                  <span className="inline-block w-24">Saturday:</span>
                  <span>7am - 8pm</span>
                </li>
                <li className="text-blue-200 flex items-start">
                  <span className="inline-block w-24">Sunday:</span>
                  <span>8am - 6pm</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="text-blue-200">123 Fitness Street</li>
                <li className="text-blue-200">Workout City, WC 12345</li>
                <li className="text-blue-200">info@fitprogym.com</li>
                <li className="text-blue-200">(123) 456-7890</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} FitPro Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
