import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero.jpeg"
        alt="Mangrove forest at Mida Creek"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green/10 via-green/40 to-oceanblue/80"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center bg-green/50 py-8 rounded-xl ">

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-sandwhite leading-tight">
          Protecting Mida Creek.{" "} 
          
          <span className="sandwhitewhite/90">
            Empowering Communities.
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-sandwhite max-w-2xl mx-auto leading-relaxed">
          Dabaso Rock Conservation Group works with local communities to
          conserve mangrove ecosystems, promote sustainable livelihoods,
          and develop eco-tourism initiatives around Mida Creek.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body bg-sandwhite text-gray-900 shadow-lg hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 h-12 rounded-lg px-10 text-lg"
          >
            Learn More
          </a>

          

        </div>
      </div>
    </section>
  );
};

export default HeroSection;