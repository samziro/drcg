import Image from "next/image";
import React from "react";

export default function DRCGAboutPage() {
  

  const stats = [
    { value: '3K+', label: 'Mangroves Restored' },
    { value: '120+', label: 'Active Volunteers' },
    { value: '2+', label: 'Active Projects' },
    { value: '1', label: 'Years of Conservation' },
  ];

  const values = [
    {
      title: 'Community First',
      description:
        'We believe local communities are the strongest guardians of coastal ecosystems.',
      icon: 'ri-team-line',
    },
    {
      title: 'Sustainability',
      description:
        'Every project is designed to create long-term environmental and economic impact.',
      icon: 'ri-plant-line',
    },
    {
      title: 'Integrity',
      description:
        'We operate with transparency, accountability, and responsibility in every initiative.',
      icon: 'ri-shield-check-line',
    },
    {
      title: 'Innovation',
      description:
        'We embrace creative conservation solutions rooted in both science and indigenous knowledge.',
      icon: 'ri-lightbulb-line',
    },
  ];

  return (
    <div className="min-h-screen text-gray-900">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <img
          src="https://dabasorockconservationgroup.vercel.app/conservation.jpeg"
          alt="Mangrove conservation"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-green/60 via-green/70 to-green/90" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-sm">
              ABOUT DRCG
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">
              Restoring Mangroves.
              <br />
              Conserving Mida Creek. <br />
              Empowering Communities.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Dabaso Rock Conservation Group is a community-led conservation
              organization dedicated to protecting the mangrove ecosystems of
              Mida Creek while creating sustainable livelihood opportunities for
              coastal communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0b3d2c] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                Explore Our Programs
              </button>

              <button className="rounded-xl border border-white/40 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0b3d2c]">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className=" py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              OUR IMPACT
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Conservation With Measurable Results
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-green-100 bg-[#f8f6f1] p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-5xl font-black text-green-800">
                  {stat.value}
                </h3>
                <p className="mt-3 text-sm font-medium uppercase tracking-wide text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl bg-green p-10 text-white shadow-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <i className="ri-focus-3-line text-3xl" />
            </div>

            <h2 className="mt-8 text-3xl font-black">Our Mission</h2>

            <p className="mt-6 text-lg leading-relaxed text-white/85">
              To protect and restore the mangrove ecosystems of Mida Creek
              through community-driven conservation, sustainable livelihoods,
              eco-tourism, and environmental education.
            </p>
          </div>

          <div className="rounded-3xl bg-oceanblue p-10 text-white shadow-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <i className="ri-eye-line text-3xl" />
            </div>

            <h2 className="mt-8 text-3xl font-black">Our Vision</h2>

            <p className="mt-6 text-lg leading-relaxed text-white/85">
              A thriving Mida Creek where healthy mangrove forests support
              biodiversity, strengthen climate resilience, and improve the
              livelihoods of local communities.
            </p>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT SECTION */}
      <section className="bg-green/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
                COMMUNITY IMPACT
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
                Community-Led Conservation Creating Real Change.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                For over a decade, Dabaso Rock Conservation Group has worked at
                the heart of Mida Creek to restore mangroves, empower local
                families, promote eco-tourism, and protect coastal biodiversity
                through grassroots action.
              </p>

              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Through environmental education, restoration programs, youth
                engagement, and sustainable livelihood initiatives, DRCG
                continues to build a future where both nature and communities
                thrive together.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <i className="ri-team-line text-3xl" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-gray-900">
                  120+
                </h3>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  Active Volunteers
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <i className="ri-leaf-line text-3xl" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-gray-900">
                  3+
                </h3>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  Active Projects
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <i className="ri-time-line text-3xl" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-gray-900">
                  1
                </h3>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  Years of Conservation
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <i className="ri-plant-line text-3xl" />
                </div>

                <h3 className="mt-6 text-4xl font-black text-gray-900">
                  3K+
                </h3>

                <p className="mt-2 text-lg font-semibold text-gray-700">
                  Mangroves Restored
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className=" py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-700">
              OUR VALUES
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              What Drives Our Work
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-green-100 bg-[#f8f6f1] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-800">
                  <i className={`${value.icon} text-3xl`} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-green" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-200">
            JOIN THE MOVEMENT
          </p>

          <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
            Every Mangrove Restored Begins With People Who Care.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Support community-led conservation, eco-tourism, and sustainable
            livelihoods across Mida Creek.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0b3d2c] shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              Donate Now
            </button>

            <button className="rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#0b3d2c]">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
