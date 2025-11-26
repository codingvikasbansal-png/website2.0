"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { Menu, FileText, Info } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SiteHeader() {
  const { toast } = useToast()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If it's an external link or a page route (not a hash), don't prevent default
    if (href.startsWith("http") || (href.startsWith("/") && !href.startsWith("/#") && !href.startsWith("#"))) {
      return
    }

    e.preventDefault()
    const targetId = href.replace("#", "").replace("/", "")
    const element = document.getElementById(targetId)
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault()
    toast({
      title: "Coming Soon! 🚀",
      description: "We're working on something amazing. Contact feature will be available soon!",
      className: "bg-black/90 backdrop-blur-xl border-blue-400/50 text-white shadow-[0_0_20px_rgba(96,165,250,0.3)]",
    })
  }

  const links = [
    { href: "#tech", label: "Tech", icon: FileText },
    { href: "#features", label: "Features", icon: FileText },
    { href: "#contact", label: "Contact", icon: Info },
    { href: "#about", label: "About", icon: Info },
  ]

  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            <Image src="/logo.png" alt="Skitbit logo" width={20} height={20} className="h-5 w-5" />
            <span className="font-semibold tracking-wide text-white">Charm AI Technologies</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {links.map((l) => {
              // For page routes, use Link component; for hash links, use smooth scroll
              if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              }
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleSmoothScroll(e, l.href)}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {l.label}
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={handleContactClick}
              className="bg-blue-400 text-black font-medium rounded-lg px-6 py-2.5
                         hover:bg-blue-300 hover:shadow-md hover:scale-[1.02]
                         transition-all cursor-pointer"
            >
              Chat With Us
            </Button>
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-gray-700 bg-gray-900/80 text-gray-200 hover:bg-gray-800"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="liquid-glass border-gray-800 p-0 w-64 flex flex-col">
                {/* Brand Header */}
                <div className="flex items-center gap-1.5 px-4 py-4 border-b border-gray-800">
                  <Image src="/logo.png" alt="Skitbit logo" width={24} height={24} className="h-6 w-6" />
                  <span className="font-semibold tracking-wide text-white text-lg">Skitbit</span>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col gap-1 mt-2 text-gray-200">
                  {links.map((l) => {
                    // For page routes, use Link component; for hash links, use smooth scroll
                    if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
                      return (
                        <Link
                          key={l.href}
                          href={l.href}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-blue-400 transition-colors"
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                            <l.icon className="h-4 w-4" />
                          </span>
                          <span className="text-sm">{l.label}</span>
                        </Link>
                      )
                    }
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, l.href)
                          // Close mobile menu after click
                          const sheet = document.querySelector('[data-state="open"]')
                          if (sheet) {
                            const closeButton = sheet.querySelector('button[aria-label="Close"]') as HTMLButtonElement
                            closeButton?.click()
                          }
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                          <l.icon className="h-4 w-4" />
                        </span>
                        <span className="text-sm">{l.label}</span>
                      </a>
                    )
                  })}
                </nav>

                {/* CTA Button at Bottom */}
                <div className="mt-auto border-t border-gray-800 p-4">
                  <Button
                    onClick={handleContactClick}
                    className="w-full bg-blue-400 text-black font-medium rounded-lg px-6 py-2.5
                               hover:bg-blue-300 hover:shadow-md hover:scale-[1.02]
                               transition-all cursor-pointer"
                  >
                    Chat With Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
