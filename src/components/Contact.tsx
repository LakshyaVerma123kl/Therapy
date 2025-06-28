// Contact.tsx
"use client";

import { useState } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  VideoCameraIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "consultation",
    preferredTime: "",
    message: "",
    agreeToContact: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.agreeToContact) {
      newErrors.agreeToContact = "You must agree to be contacted";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // Simulate form submission (replace with actual API call)
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            sessionType: "consultation",
            preferredTime: "",
            message: "",
            agreeToContact: false,
          });
        }, 5000);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take the
            <span className="text-gradient block">First Step?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reach out to schedule your free 15-minute consultation. I'm here to
            answer your questions and help you determine if therapy is right for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-10 h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a
                      href="tel:+13235550192"
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      (323) 555-0192
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Call or text for quick questions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <EnvelopeIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <a
                      href="mailto:serena@blakepsychology.com"
                      className="text-primary-600 hover:text-primary-700 transition-colors break-words"
                    >
                      serena@blakepsychology.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Office Location
                    </h4>
                    <p className="text-gray-700">
                      1287 Maplewood Drive
                      <br />
                      Los Angeles, CA 90026
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Free parking available
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 text-primary-600 mr-2" />
                  Office Hours
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">In-Person Sessions:</span>
                    <span className="text-gray-900 font-medium">
                      Tue & Thu, 10 AM–6 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Virtual Sessions:</span>
                    <span className="text-gray-900 font-medium">
                      Mon, Wed & Fri, 1 PM–5 PM
                    </span>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center">
                      <VideoCameraIcon className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-green-600 text-sm font-medium">
                        Currently accepting new clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            {isSubmitted ? (
              <div className="bg-green-50 rounded-3xl p-8 md:p-10 text-center border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. I'll get back to you
                  within 24 hours to schedule your free consultation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-3xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h3>
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`input-field ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`input-field ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  {/* Preferred Time */}
                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Preferred Time to Reach You
                    </label>
                    <input
                      type="text"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="E.g., Weekdays after 5 PM"
                    />
                  </div>
                  {/* Session Type */}
                  <div>
                    <label
                      htmlFor="sessionType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      What brings you here?
                    </label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      value={formData.sessionType}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="consultation">
                        Free 15-minute consultation
                      </option>
                      <option value="anxiety">Anxiety treatment</option>
                      <option value="relationships">
                        Relationship counseling
                      </option>
                      <option value="trauma">Trauma recovery</option>
                      <option value="general">General therapy questions</option>
                    </select>
                  </div>
                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Tell me a bit about what you'd like to discuss or any questions you have..."
                    />
                  </div>
                  {/* Agree to Contact */}
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="agreeToContact"
                        checked={formData.agreeToContact}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        I agree to be contacted
                      </span>
                    </label>
                    {errors.agreeToContact && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.agreeToContact}
                      </p>
                    )}
                  </div>
                  {/* Privacy Notice */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>Privacy Notice:</strong> This form is secure and
                      confidential. Your information will only be used to
                      respond to your inquiry and will not be shared with third
                      parties.
                    </p>
                  </div>
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 bg-red-50 rounded-2xl p-8 border border-red-200 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-red-900 mb-4">
            Emergency Resources
          </h3>
          <p className="text-red-800 mb-4">
            If you're experiencing a mental health emergency or having thoughts
            of self-harm, please contact emergency services immediately:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-red-900">Emergency:</strong>
              <br />
              <a href="tel:911" className="text-red-700 hover:text-red-800">
                911
              </a>
            </div>
            <div>
              <strong className="text-red-900">Crisis Hotline:</strong>
              <br />
              <a href="tel:988" className="text-red-700 hover:text-red-800">
                988 Suicide & Crisis Lifeline
              </a>
            </div>
            <div>
              <strong className="text-red-900">Crisis Text:</strong>
              <br />
              <span className="text-red-700">Text HOME to 741741</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
