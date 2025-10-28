import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background when user scrolls past 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className={`text-2xl font-bold flex items-center ${
            isScrolled ? "text-teal-600" : "text-white"
          }`}
        >
          Clinic Master
        </div>

        {/* Menu */}
        <ul
          className={`hidden md:flex space-x-6 font-medium transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <li className="cursor-pointer hover:text-teal-500 transition">Home</li>
          <li className="cursor-pointer hover:text-teal-500 transition">Pages</li>
          <li className="cursor-pointer hover:text-teal-500 transition">Services</li>
          <li className="cursor-pointer hover:text-teal-500 transition">Blogs</li>
          <li className="cursor-pointer hover:text-teal-500 transition">Elements</li>
          <li className="cursor-pointer hover:text-teal-500 transition">
            Contact Us
          </li>
        </ul>

        {/* Button */}
        <button
          className={`px-4 py-2 rounded-3xl transition ${
            isScrolled
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-white text-teal-600 hover:bg-teal-100"
          }`}
        >
          Appointment
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
