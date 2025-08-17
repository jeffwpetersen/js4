import * as React from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import AshAndHickory from "../images/svg/ashandhickorybug.svg"
import PaoniaDeluxeJar from "../images/paoniadeluxejar.jpg";
import Garden from "../images/gardengate.jpg";
import Westport from "../images/westport-spice-garlic-spice-blend_copy_8.jpg"


// markup
const McroMarketPage = () => {
  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      // Set up Intersection Observer to add animation class when sections come into view
      const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px 0px -400px 0px', // Negative bottom margin to trigger when bottom of section passes 400px above the bottom of viewport
        threshold: 0 // Trigger as soon as any part of the element is visible
      };

      const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          // Check if the section is entering the viewport
          if (entry.isIntersecting) {
            // Find the first div child of the section
            // Use ':scope > div' selector to get only direct children
            const firstDiv = entry.target.querySelector(':scope > div');
            if (firstDiv) {
              // Add the animation class
              firstDiv.classList.add('fade-in-visible');
            }
            // Unobserve the section after animation is triggered to prevent repeats
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all section elements
      document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
      });

      // Clean up function to disconnect the observer when component unmounts
      return () => {
        sectionObserver.disconnect();
      };
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      // Just add the animation class to all section > div elements immediately
      document.querySelectorAll('section > div').forEach(div => {
        div.classList.add('fade-in-visible');
      });
    }
  }, []);
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      <Helmet>
        <html lang="en" />
        <title>MCROMRKT - Connect with Top Manufacturers</title>
        <meta name="description" content="Connect with top manufacturers and become a retailer distributor for quality products" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-theme-color">MCROMRKT</div>
          <div className="hidden md:flex space-x-6">
            <Link to="#" className="text-gray-600 hover:text-theme-color">Home</Link>
            <Link to="#" className="text-gray-600 hover:text-theme-color">Retailers</Link>
            <Link to="#" className="text-gray-600 hover:text-theme-color">Manufacturers</Link>
            <Link to="#" className="text-gray-600 hover:text-theme-color">Shows</Link>
            <Link to="#" className="text-gray-600 hover:text-theme-color">Promoters</Link>
            <Link to="#" className="text-gray-600 hover:text-theme-color">Success Stories</Link>
          </div>
          <button className="md:hidden text-gray-600">
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-theme-color to-theme-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">MCROMRKT</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-center leading-snug">MCROMRKT allows manufacturers to access
            alternative
            distribution channels, brand build and manage relationships with retailers.
          </p>
          <div className="flex flex-row gap-4 justify-center">
            <button className="bg-white text-theme-color font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Create a retailer profile
            </button>
            <button className="bg-white text-theme-color font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Find retailers
            </button>
          </div>
          <div className="bg-blend-screen py-6">
            <button className="bg-white text-theme-color font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Show Promoter? Click Here
            </button>
          </div>

        </div>
      </section>

      {/* Top Manufacturers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Top Manufacturers</h2>

          {/* Manufacturer 1 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden shadow-md mb-24">
            <div className="md:w-1/3">
              <img src={AshAndHickory} alt="ASH AND HICKORY" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold text-theme-color">Ash & Hickory</h3>
              <h4 className="text-lg mb-2">Manufacturers of home executive office furniture and accessories.</h4>
              <p className="mb-4">Ash & Hickory crafts premium executive furniture for homes and offices, specializing in sophisticated office spaces for busy professionals. We take pride in our exceptional quality and dedicated customer service. If you're an enthusiastic retailer interested in showcasing and distributing our products at home shows in your area, please reach out to us.</p>
              <Link to="#" className="text-theme-color font-semibold hover:underline">Become a retailer distributor</Link>
            </div>
          </div>

          {/* Manufacturer 2 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden shadow-md mb-24">
            <div className="md:w-1/3">
              <img src={PaoniaDeluxeJar} alt="Mocktail supplies" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4 text-theme-color">Paonia Deluxe</h3>
              <p className="text-lg mb-2">Manufacturers of non-alcoholic mixes and liquor candied cherries and mocktail supplies.</p>
              <p className="mb-4">Paonia Deluxe manufacturers non-alcoholic mixes and liquors, candied cherries and mocktail supplies.</p>
              <Link to="#" className="text-theme-color font-semibold hover:underline">Become a representative</Link>
            </div>
          </div>

          {/* Manufacturer 3 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden shadow-md mb-24">
            <div className="md:w-1/3">
              <img src={Garden} alt="Mocktail supplies" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4 text-theme-color">Garden Great</h3>
              <p className="text-lg mb-2">Unique Goods for Outdoor Living and Indoor Decorating.</p>
              <p className="mb-4">Wrought Iron Gates and Fencing for the Home and Garden. We Specialize in Historical Metal Fence and Flower Planter Containers like Wrought Iron Planters and have the perfect Garden Bench or Gazebo to sit and enjoy nature. We offer garden structures like arbors and arches to make landscaping your property easy. We design and build custom, steel entry gates to decorate your home and gardens for a lifetime.</p>
              <Link to="#" className="text-theme-color font-semibold hover:underline">Become a retailer</Link>
            </div>
          </div>

          {/* Manufacturer 4 */}
          <div className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl overflow-hidden shadow-md">
            <div className="md:w-1/3">
              <img src={Westport} alt="Mocktail supplies" className="w-full h-full object-cover"/>
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-4 text-theme-color">Westport Spice</h3>
              <p className="text-lg mb-2">Westport Spice brings you unique spice blends, spices and soup mixes. </p>
              <p className="mb-4">Dedicated to the highest quality spice blends, soups and recipes. Practical and easy to prepare, spice blends are an easy and healthy way to cook.</p>
              <Link to="#" className="text-theme-color font-semibold hover:underline">Become a retailer</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="#" className="text-theme-comp-dark font-semibold hover:underline">Browse more manufacturers</Link>
        </div>
      </section>

      {/* Create Account Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-bold mb-2 max-w-lg mx-auto leading-snug">Create a MCROMRKT account and introduce yourself.</h4>
          <button className="bg-theme-color text-white font-bold py-3 px-8 rounded-full hover:bg-theme-dark transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Shows Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2 max-w-2xl mx-auto">Shows you can find MCROMRKT
            retailers</h2>
          <h5 className="text-lg font-bold text-center mb-12 mx-auto max-w-2xl text-gray-600">MCROMRKT enables you to discover events, build connections, and manage transactions to retail products at temporary venues like home shows, craft fairs, pop-up shops, and more.</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Show 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Home & Garden Expo</h3>
              <p className="text-gray-600 mb-4">March 15-17, 2023</p>
              <p className="text-gray-600">Chicago, IL</p>
            </div>

            {/* Show 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Food & Beverage Show</h3>
              <p className="text-gray-600 mb-4">April 5-7, 2023</p>
              <p className="text-gray-600">New York, NY</p>
            </div>

            {/* Show 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">Office Solutions Fair</h3>
              <p className="text-gray-600 mb-4">May 12-14, 2023</p>
              <p className="text-gray-600">Los Angeles, CA</p>
            </div>
          </div>

          <div className="text-center">
            <Link to="#" className="text-theme-color font-semibold hover:underline">View all shows</Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4">
                <img src="https://picsum.photos/100?random=5" alt="Sarah F." className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sarah F.</h3>
                <p className="text-gray-600">Retailer since 2020</p>
              </div>
            </div>
            <p className="text-gray-700">
              "I have been retailing in multiple markets and have turned my side hustle into a full time gig."
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">MCROMRKT</h3>
              <p className="text-gray-400">Connecting retailers with top manufacturers.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Manufacturers</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2023 MCROMRKT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default McroMarketPage
