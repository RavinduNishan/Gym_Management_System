import React from 'react'
import { FaDumbbell, FaHeartbeat, FaUsers, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaDumbbell className="text-red-500 text-2xl animate-pulse" />
            <span className="font-bold text-xl">FITPRO GYM</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-red-400 transition duration-300 font-medium">Home</a>
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

      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div 
          className="relative min-h-screen bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}
        >
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Body, <span className="text-red-500">Transform Your Life</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Join our state-of-the-art gym facilities and expert trainers to achieve your fitness goals faster than ever before.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-red-600 hover:bg-red-700 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 text-lg flex items-center justify-center transform hover:scale-105 shadow-lg">
                  <span>Start Free Trial</span>
                  <IoIosArrowForward className="ml-2 animate-bounce-horizontal" />
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 text-lg flex items-center justify-center transform hover:scale-105 shadow-lg">
                  <span>View Programs</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-500 font-semibold tracking-wider">OUR ADVANTAGES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mt-3 mb-4">
              Why Choose <span className="text-red-500">FitPro Gym</span>?
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer premium services to help you achieve your fitness goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-red-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-red-200">
                <FaDumbbell className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Modern Equipment</h3>
              <p className="text-gray-600">
                Access to the latest fitness equipment and technology to enhance your workout experience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-red-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <FaHeartbeat className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Trainers</h3>
              <p className="text-gray-600">
                Our certified personal trainers will guide you through your fitness journey.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-red-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <FaChartLine className="text-red-600 text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your fitness journey with our advanced progress tracking tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Our <span className="text-red-500">Programs</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Specialized workout programs for all fitness levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Strength Training",
                desc: "Build muscle and increase strength",
                img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Cardio Fitness",
                desc: "Improve stamina and heart health",
                img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Yoga & Flexibility",
                desc: "Enhance flexibility and mindfulness",
                img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              },
              {
                title: "Personal Training",
                desc: "Custom programs for your goals",
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              }
            ].map((program, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl group cursor-pointer">
                <img 
                  src={program.img}
                  className="w-full h-80 object-cover transition duration-500 transform group-hover:scale-110"
                  alt={program.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-white text-2xl font-bold mb-1">{program.title}</h3>
                  <p className="text-white opacity-90 mb-4">{program.desc}</p>
                  <button className="text-white font-medium flex items-center group-hover:text-red-400 transition duration-300">
                    Learn more <IoIosArrowForward className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Success <span className="text-red-500">Stories</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Hear from our satisfied members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                duration: "Member for 1 year",
                testimonial: "I've lost 30 pounds since joining FitPro Gym. The trainers are amazing and the community is so supportive. Best decision I've made!",
                stars: 5
              },
              {
                name: "Michael Chen",
                duration: "Member for 6 months",
                testimonial: "The progress tracking features have helped me stay consistent with my workouts. I've gained muscle and improved my overall fitness.",
                stars: 5
              },
              {
                name: "Jessica Williams",
                duration: "Member for 2 years",
                testimonial: "The variety of classes keeps my workouts interesting. The yoga sessions have improved my flexibility and reduced my stress levels significantly.",
                stars: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-red-400 transition duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-gray-300 mr-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Membership <span className="text-red-400">Plans</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-blue-200 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$29",
                features: [
                  "Gym access (6am - 10pm)",
                  "Standard equipment",
                  "Locker access"
                ],
                popular: false
              },
              {
                name: "Premium",
                price: "$49",
                features: [
                  "24/7 gym access",
                  "All equipment access",
                  "Group classes included",
                  "Fitness assessment"
                ],
                popular: true
              },
              {
                name: "Elite",
                price: "$79",
                features: [
                  "Premium 24/7 access",
                  "All equipment & classes",
                  "2 personal training sessions/month",
                  "Nutrition consultation"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white text-blue-900 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'transform md:-translate-y-4 border-2 border-red-500' : 'border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-1 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8 bg-gray-50 border-b">
                  <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                  <div className="text-center my-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-4 text-white font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg ${
                    plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-900 hover:bg-blue-800'
                  }`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Ready to Start Your <span className="text-red-500">Fitness Journey</span>?
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Join FitPro Gym today and take the first step towards a healthier, stronger you. Our team is ready to support you every step of the way.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white py-4 px-10 rounded-lg font-bold transition-all duration-300 text-lg transform hover:scale-105 shadow-lg">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Footer */}
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
    </div>
  )
}

export default HomePage