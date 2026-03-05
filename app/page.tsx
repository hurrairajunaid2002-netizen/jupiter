// app/page.tsx
"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Approach", id: "approach" },
    { label: "Vision & Mission", id: "vision" },
    { label: "Positions", id: "positions" },
    { label: "Compliance", id: "compliance" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjust this value to match your fixed navbar height
      // py-5 (≈20px top + bottom) + border-b (~1px) + some buffer ≈ 80–100px
      const navbarOffset = 90; // ← change if needed (test visually)

      const y =
        element.getBoundingClientRect().top + window.scrollY - navbarOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false); // close mobile menu
  };

  return (
    <div className="font-inter text-slate-800 antialiased">
      {/* Google Fonts - Inter */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 lg:px-8">
          <div className="text-3xl font-bold tracking-tight text-slate-900">
            Jupiter Recruitment
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-8 text-slate-700 font-medium">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-amber-600 transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-7 h-7 flex flex-col justify-center items-center space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-slate-700 transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden bg-white/95 border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 py-5" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-5 text-slate-700 font-medium px-6">
            {navItems.map((item) => (
              <li key={item.label} className="w-full text-center">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="block py-2 hover:text-blue-700 transition-colors duration-200 w-full cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Optional spacer so hero isn't hidden under navbar on load */}
      {/* <div className="h-20 md:h-24 lg:h-28" aria-hidden="true" /> */}

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/shipvid.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900/60" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
            Professional Ship Manning Company
          </h1>
          <p className="text-xl md:text-3xl mb-10 font-light drop-shadow-md">
            Providing qualified seafarers to ship owners in Greece.
          </p>
          <button
            onClick={() => handleNavClick("contact")}
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg px-10 py-5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
            About Us
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-4xl mx-auto">
            Jupiter Recruitment Services LLC FZ operates from Meydan Free Zone, Dubai, as a licensed
            professional ship manning company. We act as a trusted link between qualified seafarers
            and ship owners in Greece seeking reliable, skilled, and compliant crew. Our services
            focus exclusively on recruitment, screening, and coordination of seafarers for engagement
            onboard vessels. Employment agreements are concluded directly between the seafarers and
            the ship owners, who are responsible for remuneration. We operate with integrity,
            transparency, and full adherence to international maritime standards and conventions.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
            Our Approach
          </h2>
          <ul className="text-lg md:text-xl text-slate-700 space-y-5 list-disc max-w-4xl mx-auto pl-6">
            <li>Foster loyalty and continuity between seafarers and principals.</li>
            <li>Promote crew stability and operational consistency.</li>
            <li>Enhance vessel familiarity and safety.</li>
            <li>Support long-term career progression within the same shipping company.</li>
            <li>Strengthen professional relationships between seafarers and principals.</li>
          </ul>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
            Vision & Mission
          </h2>
          <div className="text-lg md:text-xl text-slate-700 space-y-8 max-w-4xl mx-auto">
            <p>
              <strong className="text-slate-900">Vision:</strong> To be a trusted ship manning partner recognized for
              professionalism, reliability, and high standards of maritime recruitment.
            </p>
            <p>
              <strong className="text-slate-900">Mission:</strong> Recruit competent, medically fit, and certified seafarers;
              maintain a disciplined and merit-based recruitment system; uphold compliance with
              international conventions including STCW 2010 and MLC 2006; support ship owners with
              competent crew; foster long-term relationships founded on trust and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section id="positions" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Positions We Recruit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: "Masters", img: "/111.jpg" },
              { name: "Chief Officers", img: "/222.jpg" },
              { name: "Deck Officers", img: "/333.jpg" },
              { name: "Chief Engineers", img: "/444.png" },
              { name: "Engineer Officers", img: "/555.png" },
              { name: "Electro-Technical Officers (ETO)", img: "/666.png" },
              { name: "Deck Ratings", img: "/777.png" },
              { name: "Engine Ratings", img: "/888.png" },
              { name: "Deck Cadets", img: "/999.png" },
              { name: "Engine Cadets", img: "/1010.png" },
            ].map((position, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-slate-100"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={position.img}
                    alt={position.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center font-semibold text-slate-800 text-lg">
                  {position.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section id="compliance" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
            Compliance & Standards
          </h2>
          <ul className="text-lg md:text-xl text-slate-700 space-y-5 list-disc max-w-4xl mx-auto pl-6">
            <li>STCW 2010 and subsequent amendments</li>
            <li>Maritime Labour Convention (MLC 2006)</li>
            <li>International maritime documentation and certification standards</li>
            <li>Structured screening, verification, and medical assessment procedures</li>
            <li>Safe, compliant, and professional recruitment practices</li>
          </ul>
        </div>
      </section>

      {/* Vessels */}
      <section id="vessels" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center">
            Vessels We Provide Crew For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { title: "Oil Tankers", image: "/1q.png" },
              { title: "Crude Oil Tankers", image: "/2q.png" },
              { title: "Product Tankers", image: "/3q.jpg" },
              { title: "Chemical Tankers", image: "/4q.jpg" },
              { title: "LNG Carriers", image: "/5q.png" },
              { title: "Bulk Carriers", image: "/6q.png" },
              { title: "Container Ships", image: "/7q.jpg" },
              { title: "Car Carriers (Ro-Ro / PCC / PCTC)", image: "/8q.png" },
            ].map((vessel, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-slate-100"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={vessel.image}
                    alt={vessel.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center font-semibold text-slate-800 text-lg">
                  {vessel.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
    {/* Contact + Footer combined – cleaner transition */}
<section 
  id="contact" 
  className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white px-6 md:px-12 lg:px-20"
>
  <div className="max-w-6xl mx-auto">
    {/* Contact Info - centered on mobile, split layout on desktop */}
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      {/* Left - Main contact */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          Get in Touch
        </h2>
        <div className="space-y-5 text-lg">
          <p className="font-medium text-2xl text-amber-400">
            Jupiter Recruitment Services LLC FZ
          </p>
          <p className="text-slate-300">
            Meydan Free Zone<br />
            Dubai, United Arab Emirates
          </p>
          <div className="mt-6 space-y-3">
            <p>
              <span className="text-slate-400">Email:</span>{' '}
              <a
                href="mailto:info@jupiterrecruitment.com"
                className="text-white hover:text-amber-400 transition-colors underline underline-offset-4"
              >
                info@jupiterrecruitment.com
              </a>
            </p>
            <p>
              <span className="text-slate-400">Phone:</span>{' '}
              <a
                href="tel:+971xxxxxxxxx"
                className="text-white hover:text-amber-400 transition-colors"
              >
                +971-XX-XXXXXXX
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right - Quick message / call to action (optional – remove if not needed) */}
      <div className="text-center md:text-left flex flex-col justify-center">
        <p className="text-xl md:text-2xl font-light text-slate-300 mb-6">
          Looking for qualified seafarers or career opportunities at sea?
        </p>
        <a
          href="mailto:info@jupiterrecruitment.com"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold text-lg px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Send us a Message →
        </a>
      </div>
    </div>

    {/* Horizontal divider */}
    <div className="h-px bg-slate-700/50 my-12 max-w-4xl mx-auto" />

    {/* Footer proper */}
    <footer className="text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand + Copyright */}
        <div>
          <p className="text-xl font-bold tracking-tight text-white">
            Jupiter Recruitment
          </p>
          <p className="text-sm text-slate-500 mt-2">
            © {new Date().getFullYear()} Jupiter Recruitment Services LLC FZ. 
            All rights reserved.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-slate-300">
          <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#positions" className="hover:text-amber-400 transition-colors">Positions</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        {/* Social icons (placeholder – replace hrefs or remove) */}
        <div className="flex gap-5">
          <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
            <span className="text-2xl">𝕏</span> {/* or use lucide-react / heroicons */}
          </a>
          <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
            <span className="text-2xl">in</span>
          </a>
          
        </div>
      </div>
    </footer>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        © {new Date().getFullYear()} Jupiter Recruitment Services LLC FZ. All rights reserved.
      </footer>
    </div>
  );
}