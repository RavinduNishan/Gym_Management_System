import React from 'react'
import { FaDumbbell, FaHeartbeat, FaUsers, FaCalendarAlt, FaChartLine } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaDumbbell className="text-red-500 text-2xl" />
            <span className="font-bold text-xl">FITPRO GYM</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-red-400 transition">Home</a>
            <a href="#" className="hover:text-red-400 transition">Programs</a>
            <a href="#" className="hover:text-red-400 transition">Schedule</a>
            <a href="#" className="hover:text-red-400 transition">Trainers</a>
            <a href="#" className="hover:text-red-400 transition">Membership</a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="relative h-96 bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
        >
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transform Your Body, <span className="text-red-500">Transform Your Life</span></h1>
            <p className="text-xl mb-8 max-w-2xl">Join our state-of-the-art gym facilities and expert trainers to achieve your fitness goals faster than ever before.</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 text-lg flex items-center justify-center">
                <span>Start Free Trial</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 text-lg flex items-center justify-center">
                <span>View Programs</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-red-500 font-semibold">OUR ADVANTAGES</span>
            <h2 className="text-3xl font-bold text-blue-900 mt-2">Why Choose FitPro Gym?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We offer premium services to help you achieve your fitness goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaDumbbell className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Modern Equipment</h3>
              <p className="text-gray-600">Access to the latest fitness equipment and technology to enhance your workout experience.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaHeartbeat className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert Trainers</h3>
              <p className="text-gray-600">Our certified personal trainers will guide you through your fitness journey.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition">
              <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="text-red-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your fitness journey with our advanced progress tracking tools.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Our Programs</h2>
            <p className="text-gray-600 mt-2">Specialized workout programs for all fitness levels</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
                alt="Strength Training"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Strength Training</h3>
                <p className="text-white opacity-80">Build muscle and increase strength</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
                alt="Cardio Fitness"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Cardio Fitness</h3>
                <p className="text-white opacity-80">Improve stamina and heart health</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
                alt="Yoga & Flexibility"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Yoga & Flexibility</h3>
                <p className="text-white opacity-80">Enhance flexibility and mindfulness</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
                alt="Personalized Programs"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white text-xl font-bold">Personal Training</h3>
                <p className="text-white opacity-80">Custom programs for your goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Success Stories</h2>
            <p className="text-gray-600 mt-2">Hear from our satisfied members</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-blue-900">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Member for 1 year</p>
                </div>
              </div>
              <p className="text-gray-600">"I've lost 30 pounds since joining FitPro Gym. The trainers are amazing and the community is so supportive. Best decision I've made!"</p>
              <div className="flex text-yellow-400 mt-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-blue-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Member for 6 months</p>
                </div>
              </div>
              <p className="text-gray-600">"The progress tracking features have helped me stay consistent with my workouts. I've gained muscle and improved my overall fitness."</p>
              <div className="flex text-yellow-400 mt-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-blue-900">Jessica Williams</h4>
                  <p className="text-sm text-gray-500">Member for 2 years</p>
                </div>
              </div>
              <p className="text-gray-600">"The variety of classes keeps my workouts interesting. The yoga sessions have improved my flexibility and reduced my stress levels significantly."</p>
              <div className="flex text-yellow-400 mt-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Membership Plans</h2>
            <p className="mt-2 opacity-80">Choose the plan that fits your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-blue-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6 bg-gray-50 border-b">
                <h3 className="text-2xl font-bold text-center">Basic</h3>
                <div className="text-center my-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Gym access (6am - 10pm)
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Standard equipment
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Locker access
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
                  Choose Plan
                </button>
              </div>
            </div>
            
            <div className="bg-white text-blue-900 rounded-lg overflow-hidden shadow-lg transform scale-105 z-10">
              <div className="p-1 bg-red-600 text-white text-center text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="p-6 bg-gray-50 border-b">
                <h3 className="text-2xl font-bold text-center">Premium</h3>
                <div className="text-center my-6">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    24/7 gym access
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    All equipment access
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Group classes included
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fitness assessment
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                  Choose Plan
                </button>
              </div>
            </div>
            
            <div className="bg-white text-blue-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="p-6 bg-gray-50 border-b">
                <h3 className="text-2xl font-bold text-center">Elite</h3>
                <div className="text-center my-6">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Premium 24/7 access
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    All equipment & classes
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    2 personal training sessions/month
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Nutrition consultation
                  </li>
                </ul>
                <button className="mt-8 w-full py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">Join FitPro Gym today and take the first step towards a healthier, stronger you. Our team is ready to support you every step of the way.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg font-semibold transition text-lg">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FaDumbbell className="text-red-500 text-2xl" />
                <span className="font-bold text-xl">FITPRO GYM</span>
              </div>
              <p className="text-blue-200">Your premier fitness destination for achieving your health and wellness goals.</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Classes</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Trainers</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Hours</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">Monday - Friday: 5am - 11pm</li>
                <li className="text-blue-200">Saturday: 7am - 8pm</li>
                <li className="text-blue-200">Sunday: 8am - 6pm</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-blue-200">123 Fitness Street</li>
                <li className="text-blue-200">Workout City, WC 12345</li>
                <li className="text-blue-200">info@fitprogym.com</li>
                <li className="text-blue-200">(123) 456-7890</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} FitPro Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
