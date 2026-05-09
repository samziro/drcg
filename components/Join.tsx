import React from "react";

const Join = () => {
  return (
    <div>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <i className="ri-hand-heart-line text-5xl text-gray-900/70 mx-auto mb-8"></i>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
            Join Us in Making a Difference
          </h2>
          <p className="mt-4 text-lg text-gray-900/70 max-w-xl mx-auto">
            Join us in protecting the environment while empowering local
            communities.
          </p>
          <div className="mt-10 grid md:flex md:flex-wrap items-center justify-center gap-4">
            <a
              href="/partnerships"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-body bg-sandwhite text-gray-900 shadow-sm hover:scale-105 hover:ease-in-out h-12 rounded-lg px-10 text-lg"
            >
              Partner With Us
              <i className="ri-shake-hands-line"></i>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-body border-2 bg-green hover:text-sandwhite h-12 rounded-lg px-10 text-lg border-sandwhite/80 text-sandwhite hover:scale-105 hover:ease-in-out"
            >
              Donate
              <i className="ri-service-line"></i>
            </a>
            <a
              href="/eco-tourism"
              className="flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 font-body h-11 rounded-md px-8 bg-oceanblue text-base text-sandwhite/90 hover:text-sandwhite hover:scale-105 hover:ease-in-out"
            >
              Visit DRCG
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
