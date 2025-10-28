import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ import Link for navigation

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        <Link
          to="/"
          className={`text-2xl font-bold flex items-center ${
            isScrolled ? "text-teal-600" : "text-white"
          }`}
        >
          Clinic Master
        </Link>

        {/* Menu */}
        <ul
          className={`hidden md:flex space-x-6 font-medium transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-teal-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-teal-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-teal-500 transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-teal-500 transition">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/elements" className="hover:text-teal-500 transition">
              Elements
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-teal-500 transition">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          to="/appointment"
          className={`px-4 py-2 rounded-3xl transition ${
            isScrolled
              ? "bg-teal-500 text-white hover:bg-teal-600"
              : "bg-white text-teal-600 hover:bg-teal-100"
          }`}
        >
          Appointment
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
