import React from "react";
import bg from "../assets/family.jpg"; 
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="relative text-gray-200 text-lg pt-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-teal-900/50 mix-blend-multiply z-10"></div>

      {/* Footer Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        
        {/* Column 1 - Subscription */}
        <div>
          <h3 className="font-semibold text-white text-2xl mb-3">
            Important Updates Waiting for You
          </h3>
          <p className="text-gray-300 mb-4">
            Get our latest and best contents right into your inbox
          </p>
          <div className="flex items-center bg-black/30  rounded-lg overflow-hidden max-w-xs">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-3 text-gray-700 flex-grow outline-none"
            />
          
          </div>
        </div>

        {/* Column 2 - Our Services */}
        <div>
          <h3 className="font-semibold text-white text-2xl mb-3">Our Services</h3>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>Emergency Care</li>
            <li>Operation Theater</li>
            <li>Medical Checkup</li>
            <li>Diagnostic Center</li>
            <li>Outdoor Checkup</li>
          </ul>
        </div>

        {/* Column 3 - Useful Links */}
        <div>
          <h3 className="font-semibold text-white text-2xl mb-3">Useful Links</h3>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Our Sitemap</li>
          </ul>
        </div>

        {/* Column 4 - Our Stores */}
        <div>
          <h3 className="font-semibold text-white text-2xl mb-3">Our Stores</h3>
          <ul className="space-y-2 text-lg text-gray-300">
            <li>New York</li>
            <li>London SF</li>
            <li>Edinburgh</li>
            <li>Los Angeles</li>
            <li>Las Vegas</li>
          </ul>
        </div>

        {/* Column 5 - Quick Links */}
        <div>
          <h3 className="font-semibold text-white text-2xl mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>

      {/* One Large Box - Contact Info */}
<div className="ml-10 translate-x-10 w-[80%] bg-black/5 backdrop-blur-md border border-white/20 rounded-2xl p-5 mx-6 md:mx-16 mt-10 mr-20 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-md text-center md:text-left">
          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">
              Get In Touch With Us
            </h3>
            <p className="text-gray-300 text-sm ">Lorem ipsum</p>
          </div>

          {/* Call Us */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Call Us</h3>
            <p className="text-gray-300 text-sm">+134 535 6654</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Send Us Email</h3>
            <p className="text-gray-300 text-sm">info@example.com</p>
          </div>

          {/* Opening Time */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-2">Opening Time</h3>
            <p className="text-gray-300 text-sm">Mon - Sat: 7:00 - 17:00</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
{/* Bottom Bar */}
<div className="relative z-30 pl-20 bg-black/30 border-t border-gray-700 mt-10 py-5 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
  <p className="ml-6">© 2025 Clinic Master. All Rights Reserved.</p>
  
  <div className="flex space-x-6 mt-2 md:mt-0">
    <a href="#" className="hover:text-teal-400 flex items-center gap-2">
      <Facebook size={18} /> <span className="hidden sm:inline">Facebook</span>
    </a>
    <a href="#" className="hover:text-teal-400 flex items-center gap-2">
      <Twitter size={18} /> <span className="hidden sm:inline">Twitter</span>
    </a>
    <a href="#" className="hover:text-teal-400 flex items-center gap-2">
      <Instagram size={18} /> <span className="hidden sm:inline">Instagram</span>
    </a>
  </div>
</div>

    </footer>
  );
}

export default Footer;
