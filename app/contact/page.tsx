"use client";

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main>
      <section className="bg-green py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sandwhite">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-sandwhite/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to learn more or plan a visit.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900">
                Get In Touch
              </h2>

              <p className="mt-4 text-gray-900/70 text-lg">
                Whether you want to visit, volunteer, partner, or donate —
                we welcome your inquiry.
              </p>

              <div className="mt-10 space-y-6">

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green/10 rounded-lg">
                    <i className="ri-map-pin-line text-green text-xl"></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Location
                    </h4>

                    <p className="text-gray-900/70">
                      Dabaso Sub-location, Near Mida Creek, Kenya
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-oceanblue/10 rounded-lg">
                    <i className="ri-mail-line text-oceanblue text-xl"></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Email
                    </h4>

                    <a
                      href="mailto:dabasorockconservationgroup@gmail.com"
                      className="text-oceanblue hover:underline break-all font-semibold"
                    >
                      dabasorockconservationgroup@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sandwhite rounded-lg">
                    <i className="ri-phone-line text-green text-xl"></i>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Phone
                    </h4>

                    <p className="text-gray-900/70">
                      0729249199 / 0115856599
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-green/10 ring ring-green/20 rounded-xl p-8">
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg ring ring-green/20 bg-sandwhite px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-900/70 focus:outline-none focus:ring-2 focus:ring-green"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-lg ring ring-green/20 bg-sandwhite px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-900/70 focus:outline-none focus:ring-2 focus:ring-green"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    required
                    maxLength={1000}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full rounded-lg ring ring-green/20 bg-sandwhite px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-900/70 focus:outline-none focus:ring-2 focus:ring-green resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 bg-green text-sandwhite shadow-md hover:bg-green/70 hover:shadow-lg h-11 rounded-md px-8 text-base w-full"
                >
                  <i className="ri-send-plane-line text-xl mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <div className="border border-t border-green/10"></div>
    </main>
  );
};

export default ContactSection;