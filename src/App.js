import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Pages/HomePage';
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Elements from "./Pages/Elements";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
