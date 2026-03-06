// app/page.tsx
"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Process", id: "recruitment" },
  { label: "Approach", id: "approach" },
  { label: "Vision", id: "vision" },
  { label: "Positions", id: "positions" },
  { label: "Compliance", id: "compliance" },
  { label: "Contact", id: "contact" },
];
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 90; // adjust if your navbar height changes
      const y = element.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <div className="font-inter text-slate-800 antialiased">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ─── Navbar ────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-6 lg:px-8">
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
                  isOpen ? "opacity-0 scale-0" : ""
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

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white/95 border-b border-slate-200 overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[500px] py-6" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-5 text-slate-700 font-medium px-6">
            {navItems.map((item) => (
              <li key={item.label} className="w-full text-center">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="block py-2 hover:text-amber-600 transition-colors w-full cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ─── Hero ──────────────────────────────────────────────── */}
    <section
  id="home"
  className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32"
  // ↑ Added top padding to clear the fixed navbar + extra breathing room on mobile
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
    src="/shipvid.mp4"
  />

  {/* Softer, modern overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

  <div className="relative z-10 text-center text-white px-5 sm:px-8 max-w-5xl w-full">
    {/* Company badge - moved a bit higher but with more top breathing room */}
    <div className="mb-6 sm:mb-8 md:mb-10 opacity-90 pt-4 sm:pt-6">
      <p className="text-base sm:text-lg md:text-xl font-medium tracking-wide uppercase text-amber-300/90 drop-shadow">
        Jupiter Recruitment Services LLC FZ
      </p>
      <p className="text-xs sm:text-sm md:text-base text-slate-300/90 mt-1.5">
        Meydan Free Zone • Dubai • United Arab Emirates
      </p>
    </div>

    {/* Headline - adjusted scale & spacing for mobile comfort */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-4 sm:mb-6 md:mb-8 drop-shadow-2xl">
      Professional Ship Manning Company
    </h1>

    {/* Subheadline - better line-height & max-width on small screens */}
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 drop-shadow-lg leading-relaxed">
      Supplying certified, experienced Seafarers to leading Greece-based shipping companies
    </p>

    {/* CTA buttons - stacked on mobile, better spacing */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-8">
      <button
        onClick={() => handleNavClick("contact")}
        className="group relative inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white bg-amber-600/95 backdrop-blur-sm border border-amber-500/30 rounded-xl shadow-xl hover:shadow-2xl hover:bg-amber-700/95 hover:border-amber-400/40 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto min-w-[220px]"
      >
        <span className="relative z-10">Get in Touch</span>
      </button>

      <button
        onClick={() => handleNavClick("about")}
        className="text-base sm:text-lg font-medium text-white/85 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-amber-400/60 hover:decoration-amber-400 decoration-2"
      >
        Learn More →
      </button>
    </div>
  </div>

  {/* Scroll indicator - hidden on mobile, appears only on larger screens */}
  {/* <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-70 animate-pulse">
    <span className="text-xs uppercase tracking-widest text-white/80">Scroll</span>
    <div className="w-5 h-9 border-2 border-white/60 rounded-full flex items-center justify-center">
      <div className="w-1.5 h-3 bg-white/80 rounded-full animate-bounce" />
    </div>
  </div> */}
</section>

      {/* ─── About ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            About Us
          </h2>
          <div className="text-lg md:text-xl leading-relaxed text-slate-700 max-w-4xl mx-auto space-y-6">
            <p>
              Jupiter Recruitment Services LLC FZ is a Dubai-based ship manning company engaged in the recruitment, screening, and coordination of qualified and experienced Seafarers for our principals — Greece-based ship owners and shipping companies.
            </p>
            <p>
              We specialize in identifying competent, medically fit, and properly certified maritime professionals who meet the operational, technical, and safety requirements of modern shipping. Through our recruitment network, we propose Seafarers from various nationalities to our Greek principals, ensuring the availability of experienced officers and ratings for different vessel types.
            </p>
            <p>
              Our recruitment and screening procedures are conducted in accordance with internationally recognized maritime conventions and regulations, including <strong>STCW 2010</strong>, <strong>MLC 2006</strong>, and applicable flag state requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Services / Vessel Types ───────────────────────────── */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Jupiter Recruitment Services LLC FZ provides qualified officers and ratings for a range of commercial vessel types, including:
          </p>
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
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-4xl mx-auto mt-12">
            Our recruitment network enables us to source experienced Seafarers of various nationalities with valid certification and relevant vessel experience in accordance with the requirements of our principals.
          </p>
        </div>
      </section>

      {/* ─── Recruitment Process ───────────────────────────────── */}
      <section id="recruitment" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Recruitment Process
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-14">
            We follow a structured and disciplined recruitment process to ensure that only qualified and suitable candidates are recommended for engagement.
            <br />The process includes:
          </p>

          <div className="max-w-4xl mx-auto">
            <ol className="relative border-l-4 border-amber-500 space-y-12 pl-12 md:pl-16">
              {[
                { step: "01", title: "Application Review", desc: "Review of candidate applications and sea service records." },
                { step: "02", title: "Document Verification", desc: "Verification of certificates and supporting documentation." },
                { step: "03", title: "Medical Fitness Verification", desc: "Confirmation that candidates meet required health standards." },
                { step: "04", title: "Computer-Based Testing (CBT)", desc: "CBT assessments where applicable." },
                { step: "05", title: "Professional Competency Assessment", desc: "Evaluation of technical knowledge and skills." },
                { step: "06", title: "Principal Interviews", desc: "Technical and operational interviews conducted by the principals’ departments." },
                { step: "07", title: "Final Approval", desc: "Final approval by the ship owners." },
              ].map((item, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-14 md:-left-16 flex items-center justify-center w-12 h-12 bg-amber-600 text-white text-lg font-bold rounded-full shadow-lg">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-lg text-slate-600">{item.desc}</p>
                </li>
              ))}
            </ol>

            <div className="mt-16 p-8 bg-amber-50 border border-amber-200 rounded-2xl text-center">
              <p className="text-xl text-slate-800 font-medium">
                In accordance with international maritime labour practices,{" "}
                <span className="text-amber-700 font-bold">Seafarers are not charged any recruitment or placement fees.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Approach ──────────────────────────────────────── */}
      <section id="approach" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Our Approach
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-10">
            We focus on building long-term professional relationships between Seafarers and our principals. Whenever possible, we promote continuity of employment with the same ship owner. This contributes to:
          </p>
          <ul className="text-lg md:text-xl text-slate-700 space-y-4 list-disc max-w-4xl mx-auto pl-8">
            <li>Crew stability and operational efficiency</li>
            <li>Greater vessel familiarity and onboard safety</li>
            <li>Long-term career development for Seafarers</li>
            <li>Strong professional relationships between Seafarers and ship owners</li>
          </ul>
          <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto mt-10 text-center font-medium">
            Our objective is to support our principals with reliable and competent crew while contributing to sustainable maritime careers.
          </p>
        </div>
      </section>

     

      {/* ─── Positions ─────────────────────────────────────────── */}
      <section id="positions" className="py-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
            Positions We Recruit
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16">
            We recruit qualified maritime professionals for positions including:
          </p>
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
            ].map((pos, i) => (
              <div
                key={i}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-slate-100"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={pos.img}
                    alt={pos.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center font-semibold text-slate-800 text-xl">
                  {pos.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-16">
           All candidates are verified for valid certification, medical fitness, and relevant vessel experience in accordance with international maritime standards.
      </p>

       {/* ─── Vision & Mission ──────────────────────────────────── */}
      <section id="vision" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
            Vision & Mission
          </h2>
          <div className="text-lg md:text-xl text-slate-700 space-y-10 max-w-4xl mx-auto">
            <div>
              <p className="font-bold text-2xl text-slate-900 mb-4">Vision</p>
              <p>
               To be a trusted ship manning partner for Greece-based ship owners, recognized for professionalism, reliability, and high standards in maritime recruitment.
              </p>
            </div>
            <div>
              <p className="font-bold text-2xl text-slate-900 mb-4">Mission</p>
              <ul className="space-y-4 list-disc pl-8">
                <li>Recruit competent, medically fit, and certified Seafarers</li>
  <li>Maintain a disciplined and transparent recruitment system</li>
  <li>Ensure compliance with international maritime conventions</li>
  <li>Support ship owners with reliable and performance-oriented crew</li>
  <li>Build long-term professional relationships based on trust and professionalism</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Compliance ────────────────────────────────────────── */}
      <section id="compliance" className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 text-center">
            Compliance & Standards
          </h2>
          <p className="text-lg md:text-xl text-slate-600 text-center max-w-3xl mx-auto mb-12">
            Our operations are conducted in accordance with internationally recognized maritime regulations and best practices, including:
          </p>
          <ul className="text-lg md:text-xl text-slate-700 space-y-5 list-disc max-w-4xl mx-auto pl-8">
           <li>STCW 2010 and subsequent amendments</li>
  <li>Maritime Labour Convention (MLC 2006)</li>
  <li>International maritime certification and documentation standards</li>
  <li>Structured screening, verification, and medical assessment procedures</li>
          </ul>
        </div>
      </section>

      {/* ─── Contact + Footer ──────────────────────────────────── */}
      <section
  id="contact"
  className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white px-5 sm:px-6 md:px-12 lg:px-20"
>
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
      {/* Left - Company info */}
      <div className="text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">
          Get in Touch
        </h2>
        <div className="space-y-6 text-base sm:text-lg">
          <p className="font-medium text-xl sm:text-2xl md:text-3xl text-amber-400">
            Jupiter Recruitment Services LLC FZ
          </p>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            Meydan Free Zone<br />
            Dubai, United Arab Emirates
          </p>

          <div className="space-y-5 mt-6 sm:mt-8">
            <p className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 justify-center">
              <span className="text-slate-400 font-medium">Email:</span>
              <a
                href="mailto:operations@jupiterrecruitmentservices.com"
                className="text-white hover:text-amber-400 transition underline underline-offset-4 break-all sm:break-normal"
              >
                operations@jupiterrecruitmentservices.com
              </a>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-2 justify-center">
              <span className="text-slate-400 font-medium">Phone:</span>
              <a
                href="tel:+971504859059"
                className="text-white hover:text-amber-400 transition"
              >
                +971 50 485 9059
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right - CTA */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left mt-6 md:mt-0">
        <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 mb-6 sm:mb-8 max-w-md">
          Looking for qualified Seafarers or a career at sea?
        </p>
        <a
          href="mailto:operations@jupiterrecruitmentservices.com"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center"
        >
          Send Message →
        </a>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-slate-700/50 my-10 sm:my-12 max-w-4xl mx-auto" />

    {/* Footer */}
    <footer className="text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-slate-300 text-sm sm:text-base">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg sm:text-xl font-bold text-white">Jupiter Recruitment Services</p>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            © {new Date().getFullYear()} Jupiter Recruitment Services LLC FZ. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            Meydan Grandstand, 6th floor,<br />
            Meydan Road, Nad Al Sheba,<br />
            Dubai, U.A.E.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 sm:gap-y-4">
          {["Home", "About", "Services", "Recruitment", "Positions", "Contact"].map((label) => (
            <button
              key={label}
              onClick={() => handleNavClick(label.toLowerCase().replace(/\s+/g, ""))}
              className="hover:text-amber-400 transition-colors"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Optional: Add social icons here later if you want */}
      </div>
    </footer>
  </div>
</section>
    </div>
  );
}