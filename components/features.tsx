"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeaturesContent {
  title: string
  subtitle: string
}

const defaultContent: FeaturesContent = {
  title: "What makes us the best MERN developer for you.",
  subtitle: "Discover our unique approach to full-stack development",
}

export function Features() {
  const [content, setContent] = useState<FeaturesContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.features) {
          setContent(parsed.features)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  return (
    <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        {content.title}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Adaptability Card - Hidden on mobile */}
        <Card className="hidden md:block liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">ADAPTABILITY</p>
            <CardTitle className="mt-1 text-xl text-white">Build scalable, modern applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=1200&fit=crop"
                  alt="Developer coding on laptop with code editor"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=1200&fit=crop"
                  alt="Code on computer screen with programming syntax"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 240px, 45vw"
                  priority={false}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Love Card - Always visible */}
        <Card className="liquid-glass border border-white/20">
          <CardHeader>
            <p className="text-[11px] tracking-widest text-white/80">CLIENT LOVE</p>
            <CardTitle className="mt-1 text-xl text-white">
              Our code doesn't just work, it scales — our clients see the difference in performance and reliability.
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 flex items-end gap-4">
              <div className="text-5xl font-bold text-blue-400">4.9</div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-blue-400 text-blue-400" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
                width={280}
                height={160}
                alt="MERN stack development - React and Node.js code"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
                width={280}
                height={160}
                alt="Full stack development - Database and API integration"
                className="h-full w-full rounded-xl border border-white/10 object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
