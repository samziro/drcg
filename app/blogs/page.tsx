import React from 'react'

const page = () => {
  return (
    <main >

  {/* <!-- HERO SECTION --> */}
  <section className="relative overflow-hidden min-h-[55vh] flex items-center">
    <img 
      src="https://dabasorockconservationgroup.vercel.app/conservation.jpeg"
      alt="DRCG conservation activities"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-br from-green/90 via-green/70 to-oceanblue/70"></div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl">
        
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/10 text-sandwhite text-sm font-medium backdrop-blur-sm mb-6">
          <i className="ri-article-line text-lg"></i>
          Stories From Mida Creek
        </span>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-sandwhite leading-tight">
          Conservation Stories,
          <span className="text-sand">Community Impact</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-sandwhite/90 leading-relaxed max-w-2xl">
          Explore field updates, mangrove restoration milestones, eco-tourism stories, youth empowerment programs, and real conservation impact happening across Mida Creek.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#latest-posts"
            className="inline-flex items-center gap-2 bg-sandwhite text-gray-900 hover:scale-105 transition-all duration-300 px-8 h-12 rounded-lg font-medium shadow-xl">
            Read Articles
            <i className="ri-arrow-right-line"></i>
          </a>

          <a href="#newsletter"
            className="inline-flex items-center gap-2 border border-white/30 text-sandwhite hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 h-12 rounded-lg font-medium">
            Subscribe
            <i className="ri-mail-open-line"></i>
          </a>
        </div>

      </div>
    </div>
  </section>

  {/* <!-- FEATURED ARTICLE --> */}
  <section id="latest-posts" className="py-20 md:py-28 bg-green/10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid lg:grid-cols-2 gap-10 items-center ">

        <div className="relative overflow-hidden rounded-xl shadow-2xl group">
          <img 
            src="https://dabasorockconservationgroup.vercel.app/conservation.jpeg"
            alt="Mangrove restoration"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute top-5 left-5">
            <span className="bg-green text-sandwhite text-xs font-semibold px-4 py-2 rounded-full">
              FEATURED STORY
            </span>
          </div>
        </div>

        <div>

          <span className="inline-flex items-center gap-2 text-green font-semibold text-sm uppercase tracking-wider">
            <i className="ri-leaf-line"></i>
            Conservation
          </span>

          <h2 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Community Members Plant 2,000 Mangrove Seedlings Along Mida Creek
          </h2>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <i className="ri-calendar-line"></i>
              14 April 2026
            </span>

            <span className="flex items-center gap-2">
              <i className="ri-time-line"></i>
              4 min read
            </span>

            <span className="flex items-center gap-2">
              <i className="ri-user-3-line"></i>
              DRCG Team
            </span>
          </div>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Over 40 volunteers from Dabaso and neighboring villages came together for our largest mangrove restoration initiative yet, restoring degraded shoreline zones while strengthening community ownership of coastal ecosystems.
          </p>

          <div className="mt-8">
            <a href="#"
              className="inline-flex items-center gap-2 bg-green text-sandwhite hover:bg-green/90 transition-all duration-300 px-8 h-12 rounded-lg font-medium shadow-lg">
              Read Full Story
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>


  {/* <!-- BLOG GRID --> */}
  <section className="pb-24 mt-12 ">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* <!-- CARD --> */}
        <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

          <div className="relative overflow-hidden h-56">
            <img 
              src="https://dabasorockconservationgroup.vercel.app/bird-watching.jpeg"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <span className="absolute top-4 left-4 bg-oceanblue text-sandwhite text-xs font-semibold px-3 py-1 rounded-full">
              Eco-Tourism
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <i className="ri-calendar-line"></i>
                27 Feb 2026
              </span>

              <span className="flex items-center gap-1">
                <i className="ri-time-line"></i>
                5 min
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-gray-900 leading-snug group-hover:text-green transition">
              Bird Watching Season Opens with Record Visitors
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Eco-tourism activities continue to grow as visitors arrive to experience the rich biodiversity and bird migration season at Mida Creek.
            </p>

            <a href="#"
              className="mt-6 inline-flex items-center gap-2 text-green font-semibold hover:gap-3 transition-all duration-300">
              Read More
              <i className="ri-arrow-right-line"></i>
            </a>

          </div>

        </article>


        {/* <!-- CARD --> */}
        <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

          <div className="relative overflow-hidden h-56">
            <img 
              src="https://dabasorockconservationgroup.vercel.app/beekeeping.jpeg"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <span className="absolute top-4 left-4 bg-green text-sandwhite text-xs font-semibold px-3 py-1 rounded-full">
              Livelihoods
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <i className="ri-calendar-line"></i>
                21 March 2026
              </span>

              <span className="flex items-center gap-1">
                <i className="ri-time-line"></i>
                3 min
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-gray-900 leading-snug group-hover:text-green transition">
              Beekeeping Workshop Graduates 18 New Apiarists
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Community members completed intensive training in modern beekeeping, helping create sustainable income opportunities for local families.
            </p>

            <a href="#"
              className="mt-6 inline-flex items-center gap-2 text-green font-semibold hover:gap-3 transition-all duration-300">
              Read More
              <i className="ri-arrow-right-line"></i>
            </a>

          </div>

        </article>


        {/* <!-- CARD --> */}
        <article className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

          <div className="relative overflow-hidden h-56">
            <img 
              src="https://dabasorockconservationgroup.vercel.app/conservation.jpeg"
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <span className="absolute top-4 left-4 bg-emerald-700 text-sandwhite text-xs font-semibold px-3 py-1 rounded-full">
              Community
            </span>
          </div>

          <div className="p-6">

            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <i className="ri-calendar-line"></i>
                4 Dec 2025
              </span>

              <span className="flex items-center gap-1">
                <i className="ri-time-line"></i>
                4 min
              </span>
            </div>

            <h3 className="font-heading text-2xl font-bold text-gray-900 leading-snug group-hover:text-green transition">
              Youth Group Launches Creek Cleanup Initiative
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              A youth-led environmental action team has begun monthly cleanup activities to fight marine pollution around Mida Creek.
            </p>

            <a href="#"
              className="mt-6 inline-flex items-center gap-2 text-green font-semibold hover:gap-3 transition-all duration-300">
              Read More
              <i className="ri-arrow-right-line"></i>
            </a>

          </div>

        </article>

      </div>

    </div>
  </section>


  {/* <!-- NEWSLETTER --> */}
  <section id="newsletter" className="py-24 ">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14 text-center">

        <div className="w-20 h-20 rounded-full bg-green/10 flex items-center justify-center mx-auto">
          <i className="ri-mail-send-line text-4xl text-green"></i>
        </div>

        <h2 className="mt-8 font-heading text-4xl font-bold text-gray-900">
          Stay Updated
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Subscribe to receive conservation updates, eco-tourism stories, mangrove restoration milestones, and community impact reports directly from DRCG.
        </p>

        <form className="mt-10 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">

            <div className="relative flex-1">
              <i className="ri-mail-line absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>

              <input 
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full h-14 pl-14 pr-5 rounded-xl border border-green/20 bg-sandwhite focus:outline-none focus:ring-2 focus:ring-green/20"
              />
            </div>

            <button 
              type="submit"
              className="h-14 px-8 rounded-xl bg-green text-sandwhite font-medium hover:bg-green/90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2">
              Subscribe
              <i className="ri-arrow-right-line"></i>
            </button>

          </div>

          <p className="mt-4 text-sm text-gray-500">
            No spam. Only meaningful conservation stories and updates.
          </p>
        </form>

      </div>

    </div>
  </section>

</main>
  )
}

export default page