import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import LazyVideo from "@/components/lazy-video"
import { Suspense } from "react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import { AppLoader } from "@/components/app-loader"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Charm AI Technologies | MERN Stack Development Services",
  description:
    "Professional MERN stack development services. We build scalable, modern web applications using MongoDB, Express, React, and Node.js.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
        />

        {/* Font Preload */}
        <link
          rel="preload"
          href="/fonts/Inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
          fetchPriority="high"
        />

        {/* Dynamic Favicon Script */}
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`
            function updateFavicon() {
              const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const faviconHref = '/logo.png';
              let link = document.querySelector("link[rel~='icon']");
              if (!link) {
                link = document.createElement('link');
                link.rel = 'icon';
                document.getElementsByTagName('head')[0].appendChild(link);
              }
              link.href = faviconHref;
            }
            updateFavicon();
            // Listen for changes in theme
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
          `}
        </Script>

        {/* Google Tag Manager (deferred) */}
        <Script id="gtm-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NFLHXXGK');`}
        </Script>

        {/* Google Analytics (deferred) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-W6LV22900R" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W6LV22900R');
          `}
        </Script>
      </head>
      <body>
        <AppLoader />
        <Suspense fallback={null}>
          <div className="fixed inset-0 z-0 bg-black">
            <LazyVideo
              src="/background-video.mp4"
              className="absolute inset-0 h-full w-full object-cover"
              autoplay={true}
              loop={true}
              muted={true}
              playsInline={true}
              aria-label="Background video wallpaper"
            />
            {/* Very dark overlay filter */}
            <div className="absolute inset-0 bg-black/75" />
          </div>
          <div className="relative z-10">{children}</div>
        </Suspense>

        {/* Vercel Speed Insights and Analytics components */}
        <SpeedInsights />
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
