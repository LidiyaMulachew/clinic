import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import service1 from "../assets/service-img1.webp";
import bg from "../assets/about-img1.png";

import service2 from "../assets/service-face-img.jpg";
import doctor from "../assets/doctor.png";
import testimony1 from "../assets/testimony1.jpg";
import testimony2 from "../assets/testimony2.png";
import testimony3 from "../assets/testimony3.jpg";
import { FaHeadset, FaShoppingCart, FaArrowRight, FaQuoteLeft, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

function Services() {
  // Testimonial data
  const testimonials = [
    {
      name: "Kenneth Fong",
      role: "CEO, Clinic Master",
      image: testimony1,
      text: "From scheduling to follow-ups, everything is seamless. This platform has made pediatric care easier and more effective for us.",
      rating: 5,
    },
    {
      name: "John Doe",
      role: "Manager, HealthPlus",
      image: testimony2,
      text: "A truly intuitive system that allows our clinic to focus on providing excellent care while handling all the administrative tasks.",
      rating: 4,
    },
    {
      name: "Jane Smith",
      role: "Developer, MedTech",
      image: testimony3,
      text: "The team is incredibly professional and child-friendly. Our workflow has never been this organized and easy to manage.",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  const t = testimonials[index];

  // FAQ data and state
const faqs = [
  {
    question: "How much do you charge for pedicure?",
    answer: "Our pedicure services start at $25, depending on the type of treatment and any additional services you choose."
  },
  {
    question: "What types of treatments do you offer?",
    answer: "We offer a variety of treatments including manicures, pedicures, facial care, skincare, and specialized pediatric care services."
  },
  {
    question: "How do I book my appointment?",
    answer: "You can book your appointment online through our website, by calling our clinic, or via our mobile app for faster scheduling."
  },
  {
    question: "Can I cancel my appointment?",
    answer: "Yes, you can cancel your appointment up to 24 hours in advance via our online portal or by calling our support team."
  },
];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="relative flex-1">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${bg})` }} />
        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center h-screen px-6 md:px-12 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Services</h1>
          <button className="bg-teal-600 hover:bg-teal-700 transition px-6 py-3 rounded-3xl font-semibold inline-flex items-center space-x-2">
            <span>Discover More</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Floating Buttons */}
        <div className="bottom-10 left-6 flex flex-col space-y-4 fixed z-50">
          <div className="relative group">
            <button className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-lg hover:bg-teal-800 transition">
              <FaHeadset className="text-white text-xl" />
            </button>
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 rounded-md bg-teal-600 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Call Support
            </span>
          </div>

          <div className="relative group">
            <button className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-800 transition">
              <FaShoppingCart className="text-white text-xl" />
            </button>
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-1 rounded-md bg-green-600 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Shop Now
            </span>
          </div>
        </div>
      </main>

       {/* our services */}
      <section className="flex flex-col gap-10 md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gray-200">
        <div className="flex-1 text-center ml-10 md:text-left">
            <h1 className="text-2xl italic md:text-3xl  italic text-teal-700 mb-4">
                Our Services
            </h1>
          <h2 className="text-6xl w-[350px] h-[100px] md:text-3xl font-bold text-gray-800 ">
           Caring for Your Child, Every Step of the Way
          </h2>

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-20 py-4 mb-5 rounded-2xl font-semibold flex items-center justify-center md:justify-start space-x-2 mx-auto md:mx-0 transition">
            <span>Well Child Checkups</span>
            <FaArrowRight className="text-white" />
          </button>
                    <button className="bg-gray-100 hover:bg-gray-300 text-black hover:text-white px-20 py-4 mb-5 rounded-2xl font-semibold flex items-center justify-center md:justify-start space-x-2 mx-auto md:mx-0 transition">
            <span>Growth Monitoring</span>
            <FaArrowRight className="text-black " />
          </button>         
           <button className="bg-gray-100  hover:bg-gray-300 text-black hover:text-white px-24 py-4 mb-5 rounded-2xl font-semibold flex items-center justify-center md:justify-start space-x-2 mx-auto md:mx-0 transition">
            <span>Newborn Care</span>
            <FaArrowRight className="text-black" />
          </button>
<p className="flex items-center ml-5 text-lg space-x-2 text-teal-700 cursor-pointer">
  <span>View All Services</span>
  <FaArrowRight />
</p>

        </div>

           <div className="flex flex-col md:flex-row bg-gray-50 rounded-3xl shadow-xl overflow-hidden max-w-6xl w-full">
    
    <div className="flex-1  rounded p-4 ">
      <img
        src={service1}
        alt="Clinic"
        className="w-full h-full object-cover rounded-l-3xl"
      />
    </div>

    <div className="flex-1 flex flex-col space-y-6  p-6 md:p-12">
      <div>
        <h1 className="text-2xl md:text-3xl italic text-teal-700 mb-2">About Us</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Well-Child Check-ups
        </h2>
      </div>

      <p className="text-gray-600 text-lg leading-relaxed">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Excellent Laporatery</li>
        <li>World Class Infrastructure</li>
        <li>Health Checkups</li>
      </ul>

      {/* Button with circle image + text + arrow */}
      <button className="bg-white hover:bg-pink-100 text-black px-6 py-3 rounded-3xl flex items-center space-x-4 self-start transition">
        {/* Circle Image */}
        <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
          <img src={service2} alt="Icon" className="w-full h-full object-cover" />
        </div>

       <div className="">
        <p className="font-semibold">Nashid Martines</p>
        <p className="text-teal-700">Cardiac Surgery</p>
</div>
          <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center ml-4">
    <FaArrowRight className="text-white transform -rotate-45" />
  </div>
      </button>
    </div>
  </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center justify-between px-6 md:px-16 py-20 bg-gray-200 gap-10">
        <div className="flex-1 border-2 border-transparent rounded-2xl p-6 md:p-12 space-y-6">
          <h1 className="lg:text-5xl md:text-3xl italic text-black mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">Here are some common questions from our patients.</p>

          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300 pb-4 cursor-pointer" onClick={() => toggleFAQ(i)}>
              <div className="flex justify-between items-center">
                <h2 className="text-lg md:text-xl font-semibold">{faq.question}</h2>
                {openIndex === i ? <FaChevronUp className="text-teal-600" /> : <FaChevronDown className="text-teal-600" />}
              </div>
              {openIndex === i && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}

          <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-3xl font-semibold flex items-center space-x-2 transition mt-4">
            <span>Learn More</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Image next to FAQ */}
        <div className="flex-1 flex justify-center">
          <div className="relative lg:w-[500px] lg:h-[600px] md:w-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <img src={doctor} alt="Clinic Doctor" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* testimony */}
     <section className="bg-gray-100 py-32 px-6 md:px-24">
       <div className="max-w-5xl mx-auto text-center transition-all duration-700 ease-in-out">
         <h2 className="font-bold italic text-xl text-teal-700 mb-2">Testimonials</h2>
         <h1 className="font-bold text-gray-900 text-4xl mb-16">
           What Our Patients Say
         </h1>
     
         <div
           key={t.name}
           className="bg-white p-12 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden mx-auto max-w-6xl animate-fade"
         >
           {/* Quote mark at top-left */}
           <FaQuoteLeft className="text-teal-600 text-4xl absolute top-8 left-8 opacity-80" />
     
           {/* Content area */}
           <div className="md:w-1/2 text-left md:pr-12">
             <p className="text-gray-700 text-lg md:text-2xl italic mb-6 leading-relaxed transition-all duration-700">
               "{t.text}"
             </p>
             <h3 className="text-teal-800 text-xl md:text-3xl font-semibold">{t.name}</h3>
             <p className="text-gray-500 text-sm md:text-base">{t.role}</p>
           </div>
     
           {/* Image & stars (right side) */}
           <div className="md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
             <img
               src={t.image}
               alt={t.name}
               className="w-full max-w-md h-96 md:h-[28rem] object-cover rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[30%] border-4 border-gray-200 shadow-lg"
             />
             {/* Stars overlay */}
     <div className="absolute bottom-4 -left-1 transform -translate-x-1/2 flex flex-col items-center border-2 border-gray-100 shadow-[0_20px_20px_rgba(0,0,0,0.5)] rounded-3xl py-4 px-6 bg-white">
       <div className="flex space-x-1 mb-1 pr-20">
         {Array.from({ length: 5 }, (_, i) => (
           <FaStar
             key={i}
             className={`w-5 h-5 ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}
           />
         ))}
       </div>
       <p className="text-black font-bold text-lg pr-20">Best Treatment</p>
     </div>
     
           </div>
         </div>
       </div>
     </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
