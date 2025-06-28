// Header.tsx
"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-primary-50 border-b border-primary-100">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="flex items-center">
                <PhoneIcon className="h-4 w-4 text-primary-600 mr-2" />
                <a
                  href="tel:+13235550192"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  (323) 555-0192
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-4 w-4 text-primary-600 mr-2" />
                <a
                  href="mailto:serena@blakepsychology.com"
                  className="text-gray-700 hover:text-primary-600 transition-colors"
                >
                  serena@blakepsychology.com
                </a>
              </div>
            </div>
            <div className="text-gray-600">
              <span className="font-medium">Office Hours:</span> Tue/Thu
              10AM-6PM • Virtual: Mon/Wed/Fri 1PM-5PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors"
              >
                Dr. Serena Blake
                <span className="block text-sm font-normal text-gray-600">
                  Clinical Psychologist
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary"
              >
                Book Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary-600 transition-colors"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-white border-t border-gray-200 shadow-lg">
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="btn-primary w-full mt-4"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
