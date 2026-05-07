import Link from "next/link";
import React from "react";

const programs = [
  {
    title: "Environmental Conservation",
    description:
      "Our conservation programs focus on restoring and protecting natural ecosystems.",
    color: "nature",
    icon: (
      <i className="ri-leaf-line text-green text-3xl"></i>
    ),
    activities: [
      "Mangrove restoration",
      "Tree planting",
      "Tree nursery establishment",
      "Beach and creek cleanups",
      "Environmental education",
      "Community conservation patrols",
    ],
  },
  {
    title: "Sustainable Livelihood Programs",
    description:
      "We support community income activities that are environmentally friendly.",
    color: "earth",
    reverse: true,
    icon: (
      <i className="ri-user-community-line text-3xl text-green"></i>
    ),
    activities: [
      "Beekeeping (Apiculture)",
      "Crab farming",
      "Artisanal fish farming",
      "Sustainable farming",
      "Forest product collection",
    ],
  },
  {
    title: "Eco-Tourism",
    description:
      "DRC promotes eco-tourism that supports conservation and community income.",
    color: "ocean",
    icon: (
      <i className="ri-binoculars-line text-3xl text-green"></i>
    ),
    activities: [
      "Bird watching tours",
      "Canoe rides through mangroves",
      "Mangrove boardwalk tours",
      "Mangrove picnic sites",
      "Traditional farm tours",
      "Cultural dance performances",
      "Local craft and curio sales",
    ],
  },
];

const ProgramsSection = () => {
  return (
    <main>
        <section className="bg-green py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-sandwhite">
              Programs & Activities
            </h1>
            <p className="mt-4 text-lg text-sandwhite/80 max-w-2xl mx-auto">
              Conservation, community empowerment, and eco-tourism at Mida Creek.
            </p>
          </div>
        </section>
        <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

        {programs.map((program, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-12 items-start ${
              program.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >

            {/* Content */}
            <div className={program.reverse ? "lg:order-2" : ""}>
              <span className={`text-${program.color}`}>
                {program.icon}
              </span>

              <h2 className="font-heading text-3xl font-bold text-foreground mt-3">
                {program.title}
              </h2>

              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                {program.description}
              </p>
            </div>

            {/* Activities */}
            <div className={program.reverse ? "lg:order-1" : ""}>
              <div className="bg-sandwhite/70 ring ring-2 ring-green/5 rounded-xl p-6">

                <h4 className="font-semibold text-gray-900 mb-4">
                  Activities include:
                </h4>

                <ul className="space-y-3">
                  {program.activities.map((activity, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-900/70"
                    >
                      <i className="ri-arrow-right-line text-green"></i>

                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>

          </div>
        ))}

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/eco-tourism"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body bg-green text-sandwhite shadow-md hover:bg-green hover:shadow-lg h-11 rounded-md px-8 text-base"
          >
            Explore Eco-Tourism

            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

      </div>
    </section>
    <div className="border border-t border-green/10"></div>
    </main>
    
  );
};

export default ProgramsSection;