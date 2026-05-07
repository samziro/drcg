import Link from "next/link";
import React from "react";

const partners = [
  {
    title: "NGOs",
    description:
      "Conservation and development NGOs supporting community-based initiatives.",
  },
  {
    title: "Government Agencies",
    description:
      "Kenya Wildlife Service, Kenya Forest Service, and local government.",
  },
  {
    title: "Conservation Organizations",
    description:
      "International and regional conservation bodies.",
  },
  {
    title: "Researchers",
    description:
      "Universities and marine research institutes studying Mida Creek ecosystems.",
  },
  {
    title: "Donors",
    description:
      "Individual and institutional supporters funding our conservation work.",
  },
];

const PartnershipsSection = () => {
  return (
    <main>
        <section className="bg-green py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-sandwhite">
              Partnerships
            </h1>
            <p className="mt-4 text-lg text-sandwhite/80 max-w-2xl mx-auto">
              Collaborating for conservation, community empowerment, and sustainable development.
            </p>
          </div>
        </section>
        <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-16">

          <i className="ri-shake-hands-line text-3xl text-oceanblue mb-4"></i>

          <h2 className="font-heading text-3xl font-bold text-gray-900">
            Collaborate With Us
          </h2>

          <p className="mt-4 text-gray-900/70 text-lg leading-relaxed">
            We welcome partnerships with organizations and individuals who
            share our commitment to conservation, community development,
            and sustainable tourism.
          </p>

        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-sandwhite ring ring-oceanblue/20 rounded-xl p-6 hover:shadow-md transition-shadow"
            >

              <h3 className="font-heading text-lg font-semibold text-gray-900">
                {partner.title}
              </h3>

              <p className="mt-2 text-gray-900/70 text-sm leading-relaxed">
                {partner.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body bg-oceanblue text-sandwhite shadow-md hover:scale-105 hover:shadow-lg h-11 rounded-md px-8 text-base"
          >
            Become a Partner

            <i className="ri-arrow-right-line text-xl ml-2"></i>
          </Link>

        </div>

      </div>
    </section>
    <div className="border border-t border-green/10"></div>
    </main>
  );
};

export default PartnershipsSection;