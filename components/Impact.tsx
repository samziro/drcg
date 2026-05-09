import Image from "next/image";
import React from "react";

const Impact = () => {
  return (
    <div>
      <section className="py-20 md:py-28 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-900/70">
              What We Do
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Impact Areas
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/programs"
              className="group bg-sandwhite rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden ">
                <Image
                  alt="Environmental Conservation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                  src="/conservation.jpeg"
                />
              </div>
              <div className="p-6 bg-sandwhite">
                <div className="text-nature mb-3">
                  <i className="ri-leaf-line text-3xl text-green"></i>
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">
                  Environmental Conservation
                </h3>
                <p className="mt-2 text-gray-900/70 text-sm leading-relaxed">
                  Protecting mangrove ecosystems, planting trees, and promoting
                  sustainable environmental practices.
                </p>
              </div>
            </a>
            <a
              href="/programs"
              className="group bg-sandwhite rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  alt="Community Livelihoods"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                  src="/beekeeping.jpeg"
                />
              </div>
              <div className="p-6 bg-sandwhite">
                <div className="text-nature mb-3">
                  <i className="ri-user-community-line text-3xl text-green"></i>
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">
                  Community Livelihoods
                </h3>
                <p className="mt-2 text-gray-900/70 text-sm leading-relaxed">
                  Supporting income-generating activities such as beekeeping,
                  fish farming, crab farming, and sustainable agriculture.
                </p>
              </div>
            </a>
            <a
              href="/eco-tourism"
              className="group bg-sandwhite rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <Image
                  alt="Eco-Tourism"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={600}
                  src="/bird-watching.jpeg"
                />
              </div>
              <div className="p-6 bg-sandwhite">
                <div className="text-nature mb-3">
                  <i className="ri-binoculars-line text-3xl text-green"></i>
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900">
                  Eco-Tourism
                </h3>
                <p className="mt-2 text-gray-900/70 text-sm leading-relaxed bg-sandwhite">
                  Providing eco-friendly tourism experiences including bird
                  watching, canoe rides, mangrove tours, and cultural
                  experiences.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
