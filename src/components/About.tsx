"use client";

import Image from "next/image";
import {
  CheckCircleIcon,
  AcademicCapIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const credentials = [
    "Licensed Clinical Psychologist (PsyD)",
    "8 Years of Clinical Experience",
    "500+ Successful Client Sessions",
    "Evidence-Based Treatment Approaches",
  ];

  const approaches = [
    {
      name: "Cognitive Behavioral Therapy (CBT)",
      description:
        "Evidence-based approach focusing on changing negative thought patterns",
    },
    {
      name: "Mindfulness-Based Therapy",
      description:
        "Incorporating mindfulness techniques for present-moment awareness",
    },
    {
      name: "Trauma-Informed Care",
      description:
        "Specialized approach for healing from traumatic experiences",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              {/* Background Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-100 rounded-full opacity-30"></div>

              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/image/doctor.jpg"
                    alt="Dr. Serena Blake in her therapy office"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Credentials Card */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                  <div className="flex items-center mb-2">
                    <AcademicCapIcon className="h-6 w-6 text-primary-600 mr-2" />
                    <span className="font-semibold text-gray-900">
                      Licensed PsyD
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Clinical Psychology Doctorate
                  </p>
                  <p className="text-xs text-primary-600 mt-1">
                    California Licensed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-slide-in-right">
            <div className="mb-6">
              <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Dr. Blake
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Compassionate Care for Your
              <span className="text-gradient block">Mental Health Journey</span>
            </h2>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD)
                based in Los Angeles, CA, with eight years of experience and
                over 500 client sessions. She blends evidence-based
                approaches—like cognitive-behavioral therapy and
                mindfulness—with compassionate, personalized care.
              </p>

              <p className="mb-4">
                Whether you meet in her Maplewood Drive office or connect
                virtually via Zoom, Dr. Blake is committed to creating a safe,
                supportive space where you can overcome anxiety, strengthen
                relationships, and heal from trauma.
              </p>
            </div>

            {/* Credentials List */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Credentials & Experience
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Therapeutic Approaches */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Therapeutic Approaches
              </h3>
              <div className="space-y-4">
                {approaches.map((approach, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {approach.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {approach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Practice Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-primary-600 mr-3" />
                  <span className="text-gray-700">
                    1287 Maplewood Drive, Los Angeles, CA 90026
                  </span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 text-primary-600 mr-3" />
                  <div className="text-gray-700">
                    <div>In-person: Tue & Thu, 10 AM–6 PM</div>
                    <div>Virtual: Mon, Wed & Fri, 1 PM–5 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
