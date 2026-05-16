import type { Metadata, Viewport } from "next";
import { Sue_Ellen_Francisco, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const sueEllenFrancisco = Sue_Ellen_Francisco({
  variable: "--font-sue-ellen-francisco",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// ─── Site-wide constants (change once, used everywhere) ───────────────────────
const SITE_URL = "https://dabasorockconservationgroup.vercel.app/"; 
const SITE_NAME = "Dabaso Rock Conservation Group";
const SITE_HANDLE = "https://web.facebook.com/drcgcbo"; 
const OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200×630 px branded image

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006400", // Mangrove green — colours browser chrome on mobile
};

// ─── Primary Metadata ─────────────────────────────────────────────────────────
export const metadata: Metadata = {
  /*
   * TITLE TEMPLATE
   * Home page → "Dabaso Rock Conservation Group | Mangrove Conservation, Watamu Kenya"
   * Sub-pages  → "About Us | Dabaso Rock Conservation Group"
   */
  title: {
    default:
      "Dabaso Rock Conservation Group | Mangrove Conservation, Watamu Kenya",
    template: "%s | Dabaso Rock Conservation Group",
  },

  /*
   * META DESCRIPTION (150–160 chars — shows in Google snippets)
   * Front-loads primary keyword, includes location and unique value prop.
   */
  description:
    "Dabaso Rock Conservation Group (DRCG) protects and restores the mangrove forests of Mida Creek, Watamu. We empower local communities through eco-tourism, sustainable livelihoods, and environmental education. Join us.",

  /*
   * KEYWORDS
   * Google largely ignores this tag but Bing, DuckDuckGo and some aggregators still use it.
   * Also useful as an internal content-planning reference.
   */
  keywords: [
    // Core brand
    "Dabaso Rock Conservation Group",
    "DRCG",
    "DRCG Watamu",
    // Primary topic
    "mangrove conservation Kenya",
    "Mida Creek conservation",
    "Mida Creek mangroves",
    "mangrove restoration Watamu",
    "mangrove reforestation Kenya",
    // Location
    "Watamu conservation",
    "Watamu Kenya environment",
    "Kilifi County conservation",
    "Kenya coast conservation",
    "coastal conservation Kenya",
    // Organisation type
    "community based organisation Kenya",
    "CBO Kenya conservation",
    "environmental NGO Kenya",
    "conservation group Watamu",
    // Programmes
    "eco-tourism Watamu Kenya",
    "mangrove eco-tourism Kenya",
    "sustainable livelihoods Kenya",
    "environmental education Kenya coast",
    "mangrove tree planting Kenya",
    "green jobs youth Kenya",
    "community conservation Kenya",
    // Regulatory context
    "KWS registered conservation",
    "KFS community forest Kenya",
    "CFA Mida Creek",
    // Long-tail
    "how to protect mangroves Kenya",
    "volunteer mangrove restoration Kenya",
    "sponsor conservation Kenya",
    "donate mangrove conservation",
  ],

  // ─── Canonical ──────────────────────────────────────────────────────────────
  // Prevents duplicate-content penalties if your site is accessible on multiple URLs.
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-KE": SITE_URL,
      "sw-KE": `${SITE_URL}/sw`, // add if/when you have a Swahili version
    },
  },

  // ─── Authorship & Publisher ─────────────────────────────────────────────────
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ─── Open Graph (Facebook, WhatsApp, LinkedIn previews) ─────────────────────
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Dabaso Rock Conservation Group | Protecting Mida Creek's Mangroves",
    description:
      "Rooted in Community. Growing for Nature. DRCG restores mangrove ecosystems at Mida Creek, Watamu and creates sustainable livelihoods for coastal Kenya communities.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Aerial view of Mida Creek mangrove forest restored by Dabaso Rock Conservation Group, Watamu Kenya",
        type: "conservation/jpeg",
      },
    ],
  },

  // ─── Twitter / X Card ───────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: SITE_HANDLE,
    creator: SITE_HANDLE,
    title:
      "Dabaso Rock Conservation Group | Mangrove Conservation, Watamu Kenya",
    description:
      "Protecting Mida Creek's mangroves & empowering Watamu communities through eco-tourism, skills training & environmental education. Regulated by KWS, KFS & CFA.",
    images: [OG_IMAGE],
  },

  // ─── Robots ─────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1, 
    },
  },

  // ─── App / PWA metadata ─────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    title: "DRCG Watamu",
    statusBarStyle: "black-translucent",
  },

  // ─── Favicon chain ──────────────────────────────────────────────────────────
  // Place these files in /public
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },

  // ─── Web manifest (enables "Add to Home Screen") ────────────────────────────
  manifest: "/site.webmanifest",
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
/*
 * Tells search engines EXACTLY what DRCG is, where it is, and what it does.
 * Enables rich results: Knowledge Panel, Sitelinks, and Breadcrumb trails.
 * Uses schema.org/NGO (subset of Organization) + LocalBusiness geo-data.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organisation entity — the main Knowledge Panel signal
    {
      "@type": ["NGO", "Organization"],
      "@id": `${SITE_URL}/#organization`,
      name: "Dabaso Rock Conservation Group",
      alternateName: ["DRCG", "DRCG Watamu"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 400,
        height: 400,
      },
      image: OG_IMAGE,
      description:
        "Dabaso Rock Conservation Group (DRCG) is a community-based organisation (CBO) in Watamu, Kilifi County, Kenya dedicated to restoring the mangrove ecosystems of Mida Creek and creating sustainable livelihoods for coastal communities through eco-tourism, skills training, and environmental education.",
      foundingLocation: {
        "@type": "Place",
        name: "Dabaso, Watamu, Kilifi County, Kenya",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Watamu, Kilifi County, Kenya",
      },
      knowsAbout: [
        "Mangrove conservation",
        "Mida Creek ecosystem",
        "Community-based conservation",
        "Eco-tourism",
        "Sustainable livelihoods",
        "Environmental education",
        "Reforestation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "General Enquiries",
        email: "dabasorockconservationgroup@gmail.com",
        telephone: "+254729249199", 
        availableLanguage: ["English", "Swahili"],
      },
      sameAs: [
        // Add your real social profile URLs here once created
        "https://web.facebook.com/drcgcbo",
      ],
    },

    // 2. WebSite entity — enables Sitelinks Search Box in Google
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Official website of Dabaso Rock Conservation Group — mangrove conservation, eco-tourism, and sustainable community development in Watamu, Kenya.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en-KE", "sw-KE"],
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // 3. LocalBusiness / Place — boosts Google Maps and "near me" queries
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "Dabaso Rock Conservation Group",
      image: OG_IMAGE,
      url: SITE_URL,
      telephone: "+254729249199",
      email: "dabasorockconservationgroup@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dabaso Village",
        addressLocality: "Watamu",
        addressRegion: "Kilifi County",
        addressCountry: "KE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -3.3646184,
        longitude: 39.9913599,
      },
      hasMap: "https://www.google.com/maps/place/Dabaso+Rock+Conservation+Rock/@-3.3661532,39.9916319,221m/data=!3m1!1e3!4m6!3m5!1s0x1815810042b09ff7:0x333ae48c366302da",
      openingHours: ["Tue 09:00-13:00", "Fri 09:00-13:00"],
      priceRange: "Free",
      currenciesAccepted: "KES, USD",
    },

    // 4. BreadcrumbList — appears beneath title in Google results
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About DRCG",
          item: `${SITE_URL}/about`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Programmes",
          item: `${SITE_URL}/programs`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Get Involved",
          item: `${SITE_URL}/partnerships`,
        },
      ],
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // lang="sw" on Swahili pages — critical for Google's language signals
      className={`${sueEllenFrancisco.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        {/* ── Preconnect to external origins (performance → Core Web Vitals → SEO) */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

        {/* ── Remix Icon stylesheet */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* ── Geo meta tags: reinforce location relevance for Watamu / Kenya */}
        <meta name="geo.region" content="KE-19" />
        {/* KE-19 = Kilifi County ISO 3166-2 */}
        <meta name="geo.placename" content="Dabaso, Watamu, Kilifi County, Kenya" />
        <meta name="geo.position" content="-3.3646184;39.9913599" />
        <meta name="ICBM" content="-3.3646184, 39.9913599" />

        {/* ── Language & content declarations */}
        <meta httpEquiv="content-language" content="en-KE" />
        <meta name="language" content="English" />

        {/* ── Category / classification signals */}
        <meta name="category" content="Environmental Conservation" />
        <meta
          name="classification"
          content="Environment, Conservation, Non-Profit, Community Development"
        />
        <meta name="subject" content="Mangrove Conservation, Watamu Kenya" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />

        {/* ── JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className="min-h-full flex flex-col bg-[url('/bg.jpg')]">
        {/*
         * Visually hidden H1-level site description for screen readers and crawlers.
         * Reinforces primary keyword without affecting visual design.
         */}
        <span className="sr-only">
          Dabaso Rock Conservation Group — Leading mangrove conservation and
          community development organisation in Watamu, Kilifi County, Kenya.
          Protecting Mida Creek ecosystems since our founding.
        </span>

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
