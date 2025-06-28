// Footer.tsx
"use client";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-blue-400" />
                <a
                  href="tel:+13235550192"
                  className="hover:text-blue-300 transition-colors"
                >
                  (323) 555-0192
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3 text-blue-400" />
                <a
                  href="mailto:serena@blakepsychology.com"
                  className="hover:text-blue-300 transition-colors"
                >
                  serena@blakepsychology.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-400" />
                <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-3 text-blue-400" />
                <span>
                  In-person: Tue & Thu, 10 AM–6 PM
                  <br />
                  Virtual: Mon, Wed & Fri, 1 PM–5 PM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-left text-gray-300 hover:text-white transition-colors"
              >
                About Dr. Blake
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-left text-gray-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block text-left text-gray-300 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-left text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mission Statement */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              Providing compassionate, evidence-based healthcare with a focus on
              patient-centered care and holistic wellness.
            </p>
            <div className="flex items-center text-red-400">
              <HeartIcon className="h-5 w-5 mr-2" />
              <span className="text-sm">Made with care for your health</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Dr. Serena Blake. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Professional medical services | Licensed healthcare provider
          </p>
        </div>
      </div>
    </footer>
  );
}
