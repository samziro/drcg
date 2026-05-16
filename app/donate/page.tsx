import Image from "next/image";
import Link from "next/link";

const donationOptions = [
  {
    icon: "ri-seedling-line",
    // amount: "$0.50",
    title: "Plant a Mangrove",
    description:
      "Supports mangrove seedling planting, restoration, and long-term ecosystem protection at Mida Creek.",
    impact: "Plants 1 mangrove tree",
  },
  {
    icon: "ri-honour-line",
    // amount: "$0",
    title: "Train a Youth",
    description:
      "Provides skills training in eco-tourism, aquaculture, and sustainable livelihoods for local youth.",
    impact: "Trains 1 community youth",
  },
  {
    icon: "ri-community-line",
    // amount: "$100",
    title: "Sponsor a Cleanup",
    description:
      "Funds beach and creek cleanup activities that protect marine biodiversity and local livelihoods.",
    impact: "Supports 1 cleanup event",
  },
  {
    icon: "ri-hand-heart-line",
    // amount: "$150",
    title: "Support Beekeeping",
    description:
      "Help by buying more beehives or even teach the community more skills in beekeeping.",
    impact: "Supports 1 beekeeping project",
  },
  {
    icon: "ri-ship-line",
    // amount: "$250",
    title: "Support Mariculture",
    description:
      "Support by teaching traditional fishing techniques and providing equipment for sustainable mariculture.",
    impact: "Restores 1 traditional canoe",
  },
  {
    icon: "ri-calendar-line",
    amount: "$10/mo",
    title: "Monthly Partner",
    description:
      "Provide ongoing support for conservation patrols, monitoring, and community programs.",
    impact: "Supports monthly conservation work",
  },
];

const DonatePage = () => {
  return (
    <main>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

        <Image
          src="/conservation.jpeg"
          alt="Community conservation work at Mida Creek"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-green/40 via-green/60 to-green/90" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">

          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sandwhite text-sm font-medium tracking-wider uppercase mb-5">
            Support Conservation
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-sandwhite leading-tight">
            Help Protect
            <span className="block text-sandwhite/90">
              Mida Creek
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-sandwhite/90 max-w-2xl mx-auto leading-relaxed">
            Your contribution supports mangrove restoration,
            youth empowerment, eco-tourism development,
            and sustainable conservation initiatives along Kenya’s coast.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <a
              href="#donation-options"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sandwhite px-8 py-3 text-base font-semibold text-green shadow-lg transition-all duration-300 hover:scale-105"
            >
              Donate Now
              <i className="ri-hand-heart-line text-lg text-green"></i>
            </a>

            {/* <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-sandwhite/70 px-8 py-3 text-base font-semibold text-sandwhite transition-all duration-300 hover:bg-sandwhite hover:text-gray-900"
            >
              Partner With Us
              <i className="ri-arrow-right-line"></i>
            </Link> */}

          </div>

        </div>

      </section>

      {/* Donation Options */}
      <section
        id="donation-options"
        className="py-20 md:py-28"
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <span className="text-sm font-semibold tracking-wider uppercase text-gray-700">
              Ways To Give
            </span>

            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-gray-900">
              Make A Real Impact
            </h2>

            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Every donation directly supports conservation,
              education, and sustainable livelihoods in the Mida Creek ecosystem.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {donationOptions.map((option, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-green/10"
              >

                <div className="flex items-center justify-between mb-6">

                  <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center">
                    <i className={`${option.icon} text-3xl text-green`}></i>
                  </div>

                  <span className="font-heading text-2xl font-bold text-green">
                    {option.amount}
                  </span>

                </div>

                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {option.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-green text-sm font-semibold">

                  <i className="ri-checkbox-circle-fill"></i>

                  <span>{option.impact}</span>

                </div>


                <button className="mt-8 w-full rounded-lg bg-green px-5 py-3 text-sm font-semibold text-sandwhite transition-all duration-300 hover:bg-green/90 hover:shadow-lg">
                  Support This Cause
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Impact Section */}
      <section className="bg-green/10 py-20 md:py-28">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <span className="text-sm font-semibold tracking-wider uppercase text-gray-700">
              Transparency & Impact
            </span>

            <h2 className="mt-3 font-heading text-3xl md:text-5xl font-bold text-gray-900">
              Where Your Support Goes
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            <div className="rounded-2xl bg-white p-8 shadow-md text-center">

              <div className="w-16 h-16 rounded-full bg-green mx-auto flex items-center justify-center text-sandwhite text-2xl mb-5">
                <i className="ri-plant-line"></i>
              </div>

              <h3 className="font-heading text-4xl font-bold text-green">
                90%
              </h3>

              <p className="mt-3 text-gray-600">
                Directly funds field conservation, mangrove restoration,
                cleanups, and community programs.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md text-center">

              <div className="w-16 h-16 rounded-full bg-green mx-auto flex items-center justify-center text-sandwhite text-2xl mb-5">
                <i className="ri-team-line"></i>
              </div>

              <h3 className="font-heading text-4xl font-bold text-green">
                7%
              </h3>

              <p className="mt-3 text-gray-600">
                Supports volunteer coordination,
                youth engagement, and training activities.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-8 shadow-md text-center">

              <div className="w-16 h-16 rounded-full bg-green mx-auto flex items-center justify-center text-sandwhite text-2xl mb-5">
                <i className="ri-file-chart-line"></i>
              </div>

              <h3 className="font-heading text-4xl font-bold text-green">
                3%
              </h3>

              <p className="mt-3 text-gray-600">
                Covers reporting, accountability,
                administration, and operational compliance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">

        <div className="mx-auto max-w-4xl px-4 text-center">

          <div className="w-20 h-20 rounded-full bg-green/10 mx-auto flex items-center justify-center mb-8">

            <i className="ri-heart-add-2-line text-5xl text-green"></i>

          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-gray-900">
            Together We Can Protect
            <span className="block text-green">
              Kenya’s Coastal Ecosystems
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Join our mission to conserve mangroves,
            empower communities, and create sustainable livelihoods
            for future generations.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

            <a
              href="#donation-options"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green px-8 py-3 text-base font-semibold text-sandwhite transition-all duration-300 hover:scale-105"
            >
              Donate Today
              <i className="ri-arrow-right-line"></i>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-green/20 bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-green/5"
            >
              Contact Us
              <i className="ri-mail-line"></i>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default DonatePage;

