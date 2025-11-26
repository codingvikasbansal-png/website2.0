import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Contact } from "@/components/contact"
import { LogoMarquee } from "@/components/logo-marquee"
import { AppverseFooter } from "@/components/appverse-footer"
import Script from "next/script"

// ✅ Force static generation for low TTFB
export const dynamic = "force-static"

export default function Page() {
  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://charmai.in/",
    name: "Charm AI Technologies | MERN Stack Development Services",
    description:
      "Professional MERN stack development services. We build scalable, modern web applications using MongoDB, Express, React, and Node.js.",
    url: "https://charmai.in/",
    mainEntity: {
      "@type": "Organization",
      name: "Charm AI Technologies",
      url: "https://charmai.in",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
  }

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        <Hero />
        <Features />
        <Contact />
        <LogoMarquee />
        <AppverseFooter />
      </main>

      {/* JSON-LD structured data */}
      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  )
}
