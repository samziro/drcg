import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-28 bg-green/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-900/70">
              About Us
            </span>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Community-Driven Conservation at Mida Creek
            </h2>

            <p className="mt-6 text-gray-900/70 leading-relaxed text-lg">
              Dabaso Rock Conservation Group (DRCG) is a community-based
              organization located in Dabaso Sub-location near Mida Creek.
              The group promotes environmental conservation while empowering
              local communities through sustainable livelihoods and
              eco-friendly enterprises.
            </p>

            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body bg-green/90 text-sandwhite shadow-md hover:bg-green hover:shadow-lg h-11 rounded-md px-8 text-base mt-8"
            >
              Read More

              <i className="ri-arrow-right-line text-xl"></i>
            </a>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/conservation.jpeg"
              alt="Community members planting mangroves"
              width={1280}
              height={720}
              className="w-full h-80 lg:h-[28rem] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;