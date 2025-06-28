// Hero.tsx
"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="section-padding hero-background min-h-screen flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30"></div>

      {/* Content */}
      <div className="relative container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-slide-up">
                Licensed Clinical Psychologist
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up animate-delay-200">
              Find Your Path to
              <span className="text-gradient block">Healing & Growth</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-normal leading-relaxed animate-slide-up animate-delay-400">
              Compassionate, evidence-based therapy to help you overcome
              anxiety, strengthen relationships, and heal from trauma in a safe,
              supportive environment.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-600">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-lg px-8 py-4"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="btn-secondary text-lg px-8 py-4"
              >
                Learn More About Me
              </button>
            </div>

            {/* Credentials */}
            <div className="mt-8 pt-8 border-t border-gray-200 animate-slide-up animate-delay-600">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-600 font-bold text-lg">
                      8
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Years Experience
                    </div>
                    <div>Licensed Clinical Practice</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary-600 font-bold text-lg">
                      500+
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Client Sessions
                    </div>
                    <div>Successful Outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-100 rounded-full opacity-60 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-secondary-100 rounded-full opacity-40 animate-pulse-slow animation-delay-1000"></div>

              {/* Main Image */}
              <div className="relative z-10 mx-auto max-w-md lg:max-w-lg">
                <div className="aspect-square relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" // Use local headshot
                    alt="Dr. Serena Blake - Clinical Psychologist"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Available for Sessions
                      </p>
                      <p className="text-xs text-gray-600">
                        In-person & Virtual options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm mb-2">Learn More</span>
            <ChevronDownIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
