import Image from "next/image";
import Link from "next/link";

const conservationItems = [
  {
    title: "Mangrove Restoration",
    description:
      "We organize community-wide mangrove planting events along the shores of Mida Creek using native species like Rhizophora mucronata and Avicennia marina.",
  },
  {
    title: "Reforestation Drives",
    description:
      "Beyond mangroves, we plant indigenous coastal trees to restore biodiversity, prevent erosion, and protect the shoreline.",
  },
  {
    title: "Community Patrols",
    description:
      "Trained community rangers conduct regular patrols to prevent illegal logging, monitor mangrove health, and report threats.",
  },
  {
    title: "Environmental Education",
    description:
      "We run awareness campaigns in schools and villages to teach the importance of mangroves, fisheries, and climate resilience.",
  },
  {
    title: "Beach & Creek Cleanups",
    description:
      "Monthly cleanups bring together volunteers, tourists, and community members to remove plastic waste and debris from the creek and beaches.",
  },
];

const livelihoodItems = [
  {
    title: "Beekeeping",
    description:
      "We train community members in modern beekeeping using Kenya Top Bar and Langstroth hives to produce honey and support pollination.",
  },
  {
    title: "Fish Farming",
    description:
      "Our aquaculture program helps families establish pond-based fish farming systems for food security and income generation.",
  },
  // {
  //   title: "Crab Farming",
  //   description:
  //     "We support mud crab fattening in mangrove-fringed ponds, a low-impact activity that works with the tidal ecosystem.",
  // },
  {
    title: "Sustainable Agriculture",
    description:
      "DRCG promotes climate-smart farming methods including composting, agroforestry, and drought-resistant crops.",
  },
  {
    title: "Skills Training",
    description:
      "Youth and women participate in workshops on financial literacy, small business management, and sustainable crafts.",
  },
];

// const tourismItems = [
//   {
//     title: "Bird Watching Tours",
//     description:
//       "Guided tours help visitors spot Crab Plovers, Greater Sand Plovers, and African Fish Eagles across the Mida Creek ecosystem.",
//   },
//   {
//     title: "Canoe Rides",
//     description:
//       "Traditional dugout canoe rides give visitors a peaceful view of the mangroves while supporting local guides.",
//   },
//   {
//     title: "Mangrove Walks",
//     description:
//       "Elevated boardwalk tours allow visitors to learn about mangrove species, ecological importance, and medicinal uses.",
//   },
//   {
//     title: "Cultural Experiences",
//     description:
//       "Guests can enjoy Giriama dance performances, storytelling, local cuisine tastings, and craft demonstrations.",
//   },
//   {
//     title: "Sunset Boardwalk Dinners",
//     description:
//       "A memorable dining experience on the boardwalk featuring fresh seafood and coastal dishes prepared by local women’s groups.",
//   },
// ];

const impactStats = [
  { value: "3,000+", label: "Mangrove Trees Planted" },
  { value: "120+", label: "Community Members Trained" },
  // { value: "3,500+", label: "Eco-Tourism Visitors Hosted" },
  { value: "6", label: "Beekeeping Hives Established" },
];

function SectionCard({
  title,
  description,
  icon,
  alt,
  image,
  reverse = false,
  background = " ",
  list,
  cta,
}: {
  title: string;
  description: string;
  icon: string;
  alt: string;
  image: string;
  reverse?: boolean;
  background?: string;
  list: { title: string; description: string }[];
  cta?: { label: string; href: string; variant?: "green" | "blue" };
}) {
  return (
    <section className={`py-20 md:py-28 ${background}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${
            reverse ? "" : ""
          }`}
        >
          <div className={reverse ? "order-2" : ""}>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 flex items-center justify-center">
                <i className={`${icon} text-3xl text-green`}></i>
              </span>
              <span className="text-sm font-semibold tracking-wider uppercase text-gray-900/70">
                {title.startsWith("Environmental")
                  ? "Program 01"
                  : title.startsWith("Community")
                  ? "Program 02"
                  : "Program 03"}
              </span>
            </div>

            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>

            <p className="mt-4 text-gray-900/70 leading-relaxed text-lg">
              {description}
            </p>

            <div className="mt-8 space-y-4">
              {list.map((item) => (
                <div
                  key={item.title}
                  className={`flex gap-4 p-4 rounded-lg ${
                    background === "bg-green/10" ? "bg-white hover:bg-sandwhite" : "bg-green/5 hover:bg-green/10"
                  } transition-colors`}
                >
                  <span className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-checkbox-circle-fill text-green text-lg"></i>
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </h4>
                    <p className="text-gray-900/60 text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {cta && (
              <div className="mt-8">
                <Link
                  href={cta.href}
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 font-body ${
                    cta.variant === "blue"
                      ? "bg-oceanblue text-sandwhite hover:scale-105"
                      : "bg-green/90 text-sandwhite hover:bg-green hover:shadow-lg"
                  } h-11 rounded-md px-8 text-base cursor-pointer shadow-md`}
                >
                  {cta.label}
                  <span className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </Link>
              </div>
            )}
          </div>

          <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${reverse ? "order-1" : ""}`}>
            <Image
              src={image}
              alt={alt}
              width={1280}
              height={720}
              className="w-full h-80 lg:h-[28rem] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/beekeeping.jpeg"
          alt="Beekeeping and sustainable livelihoods at Mida Creek"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green/30 via-green/50 to-green/80"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sandwhite text-sm font-medium tracking-wider uppercase mb-4">
            What We Do
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-sandwhite leading-tight">
            Our Programs
          </h1>

          <p className="mt-6 text-lg md:text-xl text-sandwhite/90 max-w-2xl mx-auto leading-relaxed">
            Through three core program areas, DRCG creates lasting impact — restoring mangrove ecosystems,
            empowering community livelihoods, and developing sustainable eco-tourism at Mida Creek.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 font-body bg-sandwhite text-gray-900 shadow-lg hover:scale-105 h-12 rounded-lg px-10 text-lg cursor-pointer"
            >
              Support Our Work
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 font-body border-2 border-sandwhite/80 text-sandwhite hover:bg-sandwhite hover:text-gray-900 h-12 rounded-lg px-10 text-lg cursor-pointer"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM 01 */}
      <SectionCard
        title="Environmental Conservation"
        description="At the heart of DRCG lies our commitment to protecting the fragile mangrove ecosystems of Mida Creek. These coastal forests serve as nurseries for fish, natural storm barriers, and vital carbon sinks — yet they face constant threats from deforestation, pollution, and climate change."
        icon="ri-leaf-line"
        alt="Environmental conservation at Mida Creek"
        image="/conservation.jpeg"
        list={conservationItems}
      />

      {/* PROGRAM 02 */}
      <SectionCard
        title="Community Livelihoods"
        description="Conservation cannot succeed without community prosperity. DRCG believes that when local residents have stable, sustainable incomes, they become the strongest defenders of their natural environment. Our livelihood programs create green jobs that reduce pressure on mangrove resources."
        icon="ri-user-community-line"
        alt="Community beekeeping and livelihoods program"
        image="/beekeeping.jpeg"
        list={livelihoodItems}
        background="bg-green/10"
        reverse
      />

      {/* PROGRAM 03 */}
      {/* <SectionCard
        title="Eco-Tourism"
        description="Eco-tourism is DRCG's bridge between conservation and economic empowerment. By sharing the beauty of Mida Creek with responsible visitors, we create income for local guides, boat operators, cooks, and artisans — all while funding our conservation work and raising awareness about mangrove protection."
        icon="ri-compass-3-line"
        alt="Eco-tourism bird watching at Mida Creek"
        image="/bird-watching.jpeg"
        list={tourismItems}
        cta={{ label: "Plan Your Visit", href: "/contact", variant: "blue" }}
      /> */}

      {/* IMPACT STATS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-900/70">
              Our Impact
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Programs By The Numbers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-sandwhite rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <p className="font-heading text-4xl md:text-5xl font-bold text-green">
                  {stat.value}
                </p>
                <p className="mt-3 text-gray-900/70 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}