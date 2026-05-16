import React from 'react'

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-green/10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div>
        <span className="text-sm font-semibold tracking-wider uppercase text-gray-900/70">
          About Us
        </span>

        <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
          Community-Driven Conservation at Mida Creek
        </h2>

        <p className="mt-6 text-gray-900/70 leading-relaxed text-lg">
          Dabaso Rock Conservation Group (DRCG) is a community-based
          organization located in Dabaso Sub-location near Mida Creek.
          The group promotes environmental conservation while empowering
          local communities through sustainable livelihoods and
          eco-friendly enterprises.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-10">

          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-green">1</h3>
            <p className="text-sm text-gray-900/60 mt-1">
              Years Active
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-green">120+</h3>
            <p className="text-sm text-gray-900/60 mt-1">
              Volunteers
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-md text-center hover:shadow-lg transition-all duration-300">
            <h3 className="text-3xl font-bold text-green">3</h3>
            <p className="text-sm text-gray-900/60 mt-1">
              Active Projects
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="/about"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 font-body bg-green/90 text-sandwhite shadow-md hover:bg-green hover:shadow-lg h-11 rounded-md px-8 text-base mt-8 cursor-pointer"
        >
          Read More

          <span className="w-5 h-5 flex items-center justify-center">
            <i className="ri-arrow-right-line text-xl"></i>
          </span>
        </a>
      </div>

      {/* Right Image */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
        <img
          src="/conservation.jpeg"
          alt="Community members planting mangroves"
          className="w-full h-80 lg:h-[30rem] object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* Floating Badge */}
        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl px-5 py-4 shadow-lg">
          <p className="text-xs uppercase tracking-wider text-gray-500">
            Conserving Nature
          </p>

          <h4 className="text-lg font-bold text-green">
            Empowering Communities
          </h4>
        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default About