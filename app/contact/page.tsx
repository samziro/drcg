"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });

  const [messageCount, setMessageCount] = useState(0);

  const subjects = useMemo(
    () => [
      { value: "general", label: "General Inquiry" },
      { value: "visit", label: "Plan a Visit" },
      { value: "partnership", label: "Partnership Opportunity" },
      { value: "donation", label: "Donation Question" },
      { value: "volunteer", label: "Volunteer Inquiry" },
    ],
    []
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (id === "message") setMessageCount(value.length);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "general",
      message: "",
    });
    setMessageCount(0);
  };

  return (
    <main >
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/contact.jpg"
          alt="Mida Creek mangrove boardwalk aerial view"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green/30 via-green/50 to-green/80" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sandwhite text-sm font-medium tracking-wider uppercase mb-4">
            Contact
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-sandwhite leading-tight">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg md:text-xl text-sandwhite/90 max-w-2xl mx-auto leading-relaxed">
            Reach out to plan your visit, partner with us, or learn more about conservation at Mida Creek.
            We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact cards + form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-green/5 rounded-lg p-6 border border-green/10 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-green/10">
                <i className="ri-map-pin-line text-green text-lg"></i>
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-1">Location</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dabaso Sub-location
                <br />
                Near Mida Creek, Kilifi County
                <br />
                Kenya
              </p>
            </div>

            <div className="bg-green/5 rounded-lg p-6 border border-green/10 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-green/10">
                <i className="ri-mail-line text-green text-lg"></i>
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-1">Email</h4>
              <a
                href="mailto:dabasorockconservationgroup@gmail.com"
                className="text-sm text-green hover:underline break-all"
              >
                dabasorockconservationgroup@gmail.com
              </a>
            </div>

            <div className="bg-green/5 rounded-lg p-6 border border-green/10 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-green/10">
                <i className="ri-phone-line text-green text-lg"></i>
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-1">Phone</h4>
              <p className="text-sm text-gray-600">
                <a href="tel:+254729249199" className="text-green hover:underline">
                  0729 249 199
                </a>
              </p>
              <p className="text-sm text-gray-600">
                <a href="tel:+254115856599" className="text-green hover:underline">
                  0115 856 599
                </a>
              </p>
            </div>

            <div className="bg-green/5 rounded-lg p-6 border border-green/10 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 rounded-full bg-green/10">
                <i className="ri-time-line text-green text-lg"></i>
              </div>
              <h4 className="font-heading font-semibold text-gray-900 mb-1">Office Hours</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mon – Sat
                <br />
                8:00 AM – 4:00 PM EAT
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-green/30 border-gray-300 focus:border-green"
                      type="text"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-green/30 border-gray-300 focus:border-green"
                      type="email"
                      required
                      maxLength={255}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/30"
                      type="tel"
                      maxLength={50}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-green focus:ring-2 focus:ring-green/30 bg-white"
                    >
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full rounded-md border px-4 py-2.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-green/30 resize-none border-gray-300 focus:border-green"
                  />
                  <div className="flex items-center justify-end mt-1">
                    <p className="text-xs text-gray-400">{messageCount}/500</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 font-body bg-green text-white hover:bg-green/90 h-12 rounded-lg px-8 text-base cursor-pointer w-full sm:w-auto"
                >
                  <i className="ri-send-plane-line"></i>
                  Send Message
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                Find Us
              </h2>
              <p className="text-gray-600 mb-3">
                We are located along the Mida Creek boardwalk, near the mangrove conservation area.
              </p>

              <div className="rounded-lg overflow-hidden border border-gray-200 aspect-[4/3] w-full">
              
                <iframe
                  title="Dabaso Rock Conservation Group Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.364638302947!2d39.989327646541405!3d-3.3645807067550124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1815810042b09ff7%3A0x333ae48c366302da!2sDabaso%20Rock%20Conservation%20Rock!5e0!3m2!1sen!2ske!4v1778670625448!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                />
              </div>

              <a
                href="https://maps.app.goo.gl/d3UP6HMDGyP4bLGe8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-green hover:underline"
              >
                <i className="ri-arrow-right-up-box-line"></i>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visit guide */}
      <section className="py-16 md:py-24 bg-green/5">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-green/10 text-green text-sm font-medium tracking-wider uppercase mb-3">
              Plan Your Visit
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dabaso sits on the shores of Mida Creek, one of Kenya&apos;s most beautiful tidal ecosystems.
              Here is everything you need to plan your trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 mb-4">
                <i className="ri-flight-takeoff-line text-green text-lg"></i>
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                From Mombasa
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Take the Mombasa-Malindi highway (A14) north for about 90 km. Turn right at the Mida Creek
                junction near Watamu. Dabaso is 5 km inland. Approx. 1.5 hours drive.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 mb-4">
                <i className="ri-bus-line text-green text-lg"></i>
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                By Public Transport
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Matatus and buses run regularly from Mombasa and Malindi to Watamu. From Watamu town,
                hire a tuk-tuk or boda-boda to Dabaso for about 15 minutes.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-100">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green/10 mb-4">
                <i className="ri-car-line text-green text-lg"></i>
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                From Malindi
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Head south on the A14 for about 25 km. Turn left at the Mida Creek signpost before Watamu.
                Follow the dirt road to Dabaso for 5 km. Approx. 30 minutes.
              </p>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Visitor Tips
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-green/10">
                    <i className="ri-sun-cloudy-line text-green text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">
                      Best Time to Visit
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      October to March offers the clearest skies, calmest waters, and the best bird watching.
                      The mangrove boardwalk is accessible year-round.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-green/10">
                    <i className="ri-t-shirt-line text-green text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">
                      What to Bring
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sunscreen, a hat, closed-toe shoes for the boardwalk, insect repellent, and a reusable
                      water bottle. Binoculars are great for bird watching.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-green/10">
                    <i className="ri-group-line text-green text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">
                      Group Bookings
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Visits for schools, corporates, and volunteer groups can be arranged in advance.
                      We recommend booking at least one week ahead.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-green/10">
                    <i className="ri-camera-line text-green text-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-gray-900 mb-1">
                      Photography
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Photography is welcome throughout the conservation area. Tag us on social media at Dabaso Rock Conservation Group.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-gray-100">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Ready to Visit?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you are a solo traveler, a family, a school group, or a corporate team looking for
                a meaningful day out, we would love to host you. Reach out to plan your experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#contact-form"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 bg-green text-white hover:bg-green/90 h-12 rounded-lg px-6 text-base cursor-pointer"
                >
                  <i className="ri-calendar-todo-line"></i>
                  Book a Visit
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 border-2 border-green text-green hover:bg-green hover:text-white h-12 rounded-lg px-6 text-base cursor-pointer"
                >
                  Explore Programs
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Nearby landmarks</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Watamu Marine Park",
                    "Gede Ruins",
                    "Arabuko Sokoke Forest",
                    "Malindi",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green/5 text-green text-xs font-medium"
                    >
                      <i className="ri-tree-line"></i>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;