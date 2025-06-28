// FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "I do not accept insurance directly, but I provide a superbill that you can submit to your insurance provider for potential reimbursement, depending on your plan's out-of-network benefits.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, I offer virtual sessions via a secure, HIPAA-compliant Zoom platform. These are available on Monday, Wednesday, and Friday from 1 PM to 5 PM, providing the same quality of care as in-person sessions.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "I require at least 24 hours' notice for cancellations or rescheduling to avoid a cancellation fee. This policy helps ensure appointment availability for all clients. We can discuss the full policy during your first session.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions About
            <span className="text-gradient block">Starting Therapy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are answers to common questions about therapy, my practice, and
            what you can expect when working together. Don't see your question?
            Feel free to reach out.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset transition-colors duration-200 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUpIcon className="h-6 w-6 text-primary-600" />
                      ) : (
                        <ChevronDownIcon className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-8 pb-6">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              I&#39;m here to help address any concerns or questions you might
              have about therapy or my practice. Schedule a free consultation to
              discuss your specific situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-lg"
              >
                Schedule Free Consultation
              </button>
              <a
                href="mailto:serena@blakepsychology.com"
                className="btn-secondary text-lg"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
