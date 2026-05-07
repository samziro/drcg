import Link from "next/link";
import React from "react";

const WhoWeAre = () => {
  return (
    <main>
        <section className="bg-green py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-sandwhite">
              About Us
            </h1>
            <p className="mt-4 text-lg text-sandwhite/80 max-w-2xl mx-auto">
              Learn about our mission, vision, and the community driving
              conservation at Mida Creek.
            </p>
          </div>
        </section>
        <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        {/* Intro */}
        <div className="max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-gray-900/70">
            Who We Are
          </h2>

          <p className="mt-6 text-gray-900/70 leading-relaxed text-lg">
            Dabaso Rock Conservation Group (DRCG) is a community-based
            conservation organization working to protect the natural ecosystems
            of Mida Creek while improving the livelihoods of local communities.
          </p>

          <p className="mt-4 text-gray-900/70 leading-relaxed text-lg">
            The group was formed by community members who recognized the need to
            safeguard the environment while creating sustainable economic
            opportunities.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Vision */}
          <div className="bg-oceanblue/5 border border-oceanblue/20 rounded-xl p-8">
            <i className="ri-eye-line text-oceanblue mb-4 text-3xl"></i>

            <h2 className="font-heading text-2xl font-semibold text-gray-900">
              Our Vision
            </h2>

            <p className="mt-3 text-gray-900/70 leading-relaxed">
              Empowering the community in the sustainable use of non-destructive
              approaches in the creek and management of the ecosystem.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-green/5 border border-green/20 rounded-xl p-8">
            <i className="ri-focus-2-line text-green mb-4 text-3xl"></i>

            <h2 className="font-heading text-xl font-semibold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-3 text-gray-900/70 leading-relaxed">
              To bring positive change through conservation and promote the wise
              use of natural resources.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Core Values
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {/* Value 1 */}
            <div className="flex items-center gap-3 p-5 bg-sandwhite ring ring-green/20 rounded-xl">
              <span className="text-nature">
                <i className="ri-star-line text-green text-2xl"></i>
              </span>

              <span className="font-medium text-gray-900/70">
                Positive Change
              </span>
            </div>

            {/* Value 2 */}
            <div className="flex items-center gap-3 p-5 bg-sandwhite ring ring-green/20 rounded-xl">
              <span className="text-nature">
                <i className="ri-heart-3-line text-green text-2xl"></i>
              </span>

              <span className="font-medium text-gray-900/70">
                Community Well-being
              </span>
            </div>

            {/* Value 3 */}
            <div className="flex items-center gap-3 p-5 bg-sandwhite ring ring-green/20 rounded-xl">
              <span className="text-nature">
                <i className="ri-focus-2-line text-green mb-4 text-3xl"></i>
              </span>

              <span className="font-medium text-gray-900/70">
                Respect for Life & Nature
              </span>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="mt-16">
          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Our Objectives
          </h2>

          <ul className="mt-6 space-y-3">
            {[
              "Promote environmental conservation",
              "Support eco-friendly enterprises",
              "Provide community skills training",
              "Encourage research and knowledge sharing",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-900/70"
              >
                <i className="ri-arrow-right-line text-green"></i>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-green text-sandwhite shadow-md hover:bg-nature/90 hover:shadow-lg h-11 rounded-md px-8 text-base"
          >
            Explore Our Programs
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
    <div className="border border-t border-green/10">

    </div>
    </main>
    
  );
};

export default WhoWeAre;
