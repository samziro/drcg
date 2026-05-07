import Link from "next/link";
import React from "react";

const projects = [
  {
    title: "Mangrove Restoration Project",
    description:
      "Community-driven mangrove planting and ecosystem restoration along Mida Creek, rehabilitating degraded areas and establishing nurseries.",
    status: "Ongoing",
  },
  {
    title: "Community Beekeeping Project",
    description:
      "Supporting local honey production for sustainable income through training, equipment provision, and market linkages.",
    status: "Ongoing",
  },
  {
    title: "Eco-Tourism Development",
    description:
      "Developing tourism experiences such as boardwalk tours, canoe rides, and cultural experiences to generate community revenue.",
    status: "Ongoing",
  },
  {
    title: "Marine Resource Protection",
    description:
      "Community patrols protecting mangrove and marine ecosystems from illegal harvesting and destructive practices.",
    status: "Ongoing",
  },
];

const ProjectsSection = () => {
  return (
    <main>
         <section className="bg-green py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-sandwhite">
              Our Projects
            </h1>
            <p className="mt-4 text-lg text-sandwhite/80 max-w-2xl mx-auto">
              Driving conservation and community development through targeted initiatives.
            </p>
          </div>
        </section>
        <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-sandwhite/70 ring ring-2 ring-green/5 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >

              {/* Header */}
              <div className="flex items-center gap-2 mb-4">

                {/* Icon */}
                <i className="ri-verified-badge-fill text-green text-xl"></i>

                {/* Status */}
                <span className="text-xs font-semibold uppercase tracking-wider text-oceanblue bg-oceanblue/10 px-2 py-1 rounded-full">
                  {project.status}
                </span>

              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-900/70 leading-relaxed">
                {project.description}
              </p>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body bg-green text-sandwhite shadow-md hover:bg-nature/90 hover:shadow-lg h-11 rounded-md px-8 text-base"
          >
            Support Our Projects

            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

      </div>
    </section>
    <div className="border border-t border-green/10"></div>
    </main>
    
  );
};

export default ProjectsSection;