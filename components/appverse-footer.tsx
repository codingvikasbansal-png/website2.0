"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Twitter, Youtube, MessageCircle, Code, Zap, Shield, Users } from "lucide-react"
import Image from "next/image"

interface FooterContent {
  tagline: string
  copyright: string
}

const defaultContent: FooterContent = {
  tagline: "Experience MERN stack development like never before. We build scalable web applications for modern businesses.",
  copyright: "© 2025 — Charm AI Technologies",
}

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent)

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http") || (href.startsWith("/") && !href.startsWith("/#"))) {
      return
    }
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.footer) {
          setContent(parsed.footer)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section className="text-white">
      {/* Contact CTA */}
      <div className="container mx-auto px-4 pt-12 sm:pt-16">
        <div className="flex justify-center">
          <Button
            onClick={handleContactClick}
            className="rounded-full bg-blue-400 px-6 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(96,165,250,0.35)] hover:bg-blue-300 cursor-pointer"
          >
            Contact us
          </Button>
        </div>
      </div>

      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-blue-400">STREAMLINE YOUR DEVELOPMENT</p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Build &amp; deploy full-stack applications with confidence
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Review code, collaborate in real-time, and deploy seamlessly. Using our modern development &amp;
                deployment tools
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-800">
                  {/* Web Development Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {/* Code-like grid pattern */}
                    <div className="absolute inset-0" style={{
                      backgroundImage: `
                        linear-gradient(rgba(96, 165, 250, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(96, 165, 250, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }} />
                    {/* Floating code elements */}
                    <div className="absolute top-10 left-4 text-blue-400/30 font-mono text-xs">
                      {'<div>'}
                    </div>
                    <div className="absolute top-20 left-8 text-blue-400/30 font-mono text-xs">
                      {'className="..."'}
                    </div>
                    <div className="absolute top-32 left-4 text-blue-400/30 font-mono text-xs">
                      {'</div>'}
                    </div>
                    <div className="absolute bottom-20 right-4 text-blue-400/30 font-mono text-xs">
                      {'const app = () => {'}
                    </div>
                    <div className="absolute bottom-12 right-8 text-blue-400/30 font-mono text-xs">
                      {'return <App />'}
                    </div>
                  </div>
                  
                  {/* Web Development Icon/Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Code brackets */}
                      <div className="text-blue-400/40 text-6xl font-mono font-bold">
                        {'{ }'}
                      </div>
                      {/* Tech stack icons representation */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400/50 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-blue-400/50 animate-pulse [animation-delay:0.2s]" />
                        <div className="w-2 h-2 rounded-full bg-blue-400/50 animate-pulse [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>

                  {/* On-screen content */}
                  <div className="relative z-10 p-3 h-full flex flex-col justify-between">
                    <div className="mx-auto h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <div className="text-5xl font-extrabold text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.5)]">Development Made Easy</div>
                      <p className="text-xs text-white/80">From concept to deployment in a single flow</p>
                      <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-blue-400">
                        Full Stack
                      </div>
                    </div>
                    <div className="flex gap-2 justify-center pb-2">
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-xs font-mono">R</div>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-xs font-mono">N</div>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-xs font-mono">M</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* About Section */}
      <div id="about" className="container mx-auto px-4 py-12 sm:py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            About Charm AI Technologies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-300">
            Building the future of web development, one line of code at a time
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Code,
              title: "Full-Stack Expertise",
              description: "Mastery of the entire MERN stack ecosystem, from database design to frontend optimization.",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Optimized code that delivers exceptional performance and user experience.",
            },
            {
              icon: Shield,
              title: "Secure & Reliable",
              description: "Enterprise-grade security practices and robust error handling in every project.",
            },
            {
              icon: Users,
              title: "Client-Focused",
              description: "Dedicated to understanding your business needs and delivering solutions that matter.",
            },
          ].map((feature, index) => (
            <Card key={index} className="liquid-glass border border-white/20">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/10">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-neutral-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="liquid-glass border border-white/20">
            <CardHeader>
              <p className="text-[11px] tracking-widest text-white/80">OUR MISSION</p>
              <CardTitle className="mt-1 text-xl text-white">
                Empowering businesses through cutting-edge technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">
                We believe in creating digital solutions that not only meet today's requirements but are built
                to scale for tomorrow's challenges. Our team combines technical expertise with business acumen
                to deliver applications that drive real value.
              </p>
            </CardContent>
          </Card>

          <Card className="liquid-glass border border-white/20">
            <CardHeader>
              <p className="text-[11px] tracking-widest text-white/80">OUR APPROACH</p>
              <CardTitle className="mt-1 text-xl text-white">
                Agile development with a focus on quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-300">
                We follow industry best practices and agile methodologies to ensure transparent communication,
                rapid iteration, and timely delivery. Every project is a partnership, and we're committed to
                your success every step of the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 pb-20 md:pb-10">
        {/* Dark transparent overlay */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        <div className="relative container mx-auto px-4 py-10">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image src="/logo.png" alt="Skitbit logo" width={24} height={24} className="h-6 w-6" />
                <span className="text-xl font-semibold text-white">Charm AI</span>
              </div>
              <p className="max-w-sm text-sm text-neutral-300">{content.tagline}</p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:col-span-2 md:grid-cols-2">
              <div>
                <h5 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-300">Navigation</h5>
                <ul className="space-y-2 text-sm text-neutral-200">
                  {["Home", "Features", "About", "Contact"].map((item) => (
                    <li key={item}>
                      <span
                        className="text-neutral-200 cursor-not-allowed opacity-50"
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-300">Social media</h5>
                <ul className="space-y-2 text-sm text-neutral-200">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-300" />
                    <span className="text-neutral-200 cursor-not-allowed opacity-50">
                      X/Twitter
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-300" />
                    <span className="text-neutral-200 cursor-not-allowed opacity-50">
                      YouTube
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-300" />
                    <span className="text-neutral-200 cursor-not-allowed opacity-50">
                      Instagram
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-300" />
                    <span className="text-neutral-200 cursor-not-allowed opacity-50">
                      Threads
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs text-neutral-300 sm:flex-row">
            <p className="text-center sm:text-left">{content.copyright}</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

