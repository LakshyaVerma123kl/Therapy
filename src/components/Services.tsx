"use client";
import React from "react";
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  VideoCameraIcon,
  MapPinIcon,
  CheckIcon,
  PhoneIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const services = [
    {
      icon: HeartIcon,
      title: "Anxiety Treatment",
      description:
        "Evidence-based approaches to help you manage anxiety, panic attacks, and worry patterns through CBT and mindfulness techniques.",
      color: "from-blue-400 to-blue-600",
      features: [
        "Panic Attack Management",
        "Social Anxiety",
        "Generalized Anxiety",
        "Phobia Treatment",
      ],
    },
    {
      icon: UserGroupIcon,
      title: "Relationship Counseling",
      description:
        "Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection.",
      color: "from-purple-400 to-purple-600",
      features: [
        "Couples Therapy",
        "Communication Skills",
        "Conflict Resolution",
        "Intimacy Building",
      ],
    },
    {
      icon: ShieldCheckIcon,
      title: "Trauma Recovery",
      description:
        "Specialized trauma-informed care to help you heal from past experiences and develop healthy coping strategies.",
      color: "from-teal-400 to-teal-600",
      features: [
        "PTSD Treatment",
        "Childhood Trauma",
        "Complex Trauma",
        "EMDR Therapy",
      ],
    },
  ];

  const sessionOptions = [
    {
      icon: MapPinIcon,
      title: "In-Person Sessions",
      schedule: "Tuesday & Thursday",
      time: "10:00 AM - 6:00 PM",
      location: "1287 Maplewood Drive, Los Angeles, CA 90026",
      description:
        "Traditional face-to-face therapy in a comfortable, private office setting.",
      fee: "$200 per individual session, $240 per couples session",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      icon: VideoCameraIcon,
      title: "Virtual Sessions",
      schedule: "Monday, Wednesday & Friday",
      time: "1:00 PM - 5:00 PM",
      location: "Secure Zoom Platform",
      description: "Convenient online therapy from the comfort of your home.",
      fee: "$200 per individual session, $240 per couples session",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-blue-200/50 px-6 py-3 rounded-full mb-6">
            <HeartIcon className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-semibold">
              Therapeutic Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specialized Treatment
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tailored to Your Needs
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I offer evidence-based therapeutic approaches designed to help you
            overcome challenges, build resilience, and achieve lasting positive
            change in your life.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl border border-white/50"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Service icon with animated background */}
              <div className="relative mb-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <div
                  className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features list */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center group/feature"
                  >
                    <div
                      className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full mr-4 group-hover/feature:scale-125 transition-transform duration-200`}
                    ></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Session Options */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Flexible Session Options
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose between in-person and virtual sessions based on your
              preferences and schedule. Both options provide the same
              high-quality therapeutic experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sessionOptions.map((option, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-gray-200/50"
              >
                <div className="flex items-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-1">
                      {option.title}
                    </h4>
                    <p className="text-blue-600 font-semibold text-lg">
                      {option.schedule}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center bg-gray-50/50 rounded-xl p-4">
                    <ClockIcon className="h-6 w-6 text-blue-500 mr-4" />
                    <span className="text-gray-700 font-medium text-lg">
                      {option.time}
                    </span>
                  </div>
                  <div className="flex items-start bg-gray-50/50 rounded-xl p-4">
                    <MapPinIcon className="h-6 w-6 text-blue-500 mr-4 mt-0.5" />
                    <span className="text-gray-700 font-medium text-lg">
                      {option.location}
                    </span>
                  </div>
                  <div className="bg-blue-50/50 rounded-xl p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-gray-900 font-bold text-lg">
                        Session Fees:
                      </span>
                    </div>
                    <span className="text-blue-700 font-semibold text-lg">
                      {option.fee}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg bg-gray-50/30 rounded-xl p-4">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 md:p-16 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <CalendarIcon className="h-16 w-16 text-white/80 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Begin Your Journey?
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Take the first step towards better mental health. Schedule a
                free 15-minute consultation to discuss your needs and see if
                we&#39;re a good fit to work together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  Schedule Free Consultation
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                >
                  <CheckIcon className="h-6 w-6 mr-3" />
                  View Common Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
