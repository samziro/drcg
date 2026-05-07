import React from "react";

const Activities = () => {
  return (
    <div>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-900/70">
              Activities
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Activities Snapshot
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-sandwhite ring ring-2 ring-green/70">
              <i className="ri-verified-badge-fill text-green text-xl"></i>
              <span className="text-gray-900/70 text-sm font-medium">
                Tree planting &amp; mangrove restoration
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-sandwhite ring ring-2 ring-green/70">
              <i className="ri-verified-badge-fill text-green text-xl"></i>
              <span className="text-gray-900/70 text-sm font-medium">
                Beach and creek cleanups
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-sandwhite ring ring-2 ring-green/70">
              <i className="ri-verified-badge-fill text-green text-xl"></i>
              <span className="text-gray-900/70 text-sm font-medium">
                Beekeeping and aquaculture
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-sandwhite ring ring-2 ring-green/70">
              <i className="ri-verified-badge-fill text-green text-xl"></i>
              <span className="text-gray-900/70 text-sm font-medium">
                Eco-tourism experiences
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-sandwhite ring ring-2 ring-green/70">
              <i className="ri-verified-badge-fill text-green text-xl"></i>
              <span className="text-gray-900/70 text-sm font-medium">
                Environmental awareness programs
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-sandwhite ring ring-2 ring-green/70">
              <i className="ri-verified-badge-fill text-green text-xl"></i>
              <span className="text-gray-900/70 text-sm font-medium">
                Community conservation patrols
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
