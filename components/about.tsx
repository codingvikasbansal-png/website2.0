"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Zap, Shield, Users } from "lucide-react"

interface AboutContent {
  title: string
  subtitle: string
}

const defaultContent: AboutContent = {
  title: "About Charm AI Technologies",
  subtitle: "Building the future of web development, one line of code at a time",
}

export function About() {
  const [content, setContent] = useState<AboutContent>(defaultContent)

  useEffect(() => {
    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content")
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent)
        if (parsed.about) {
          setContent(parsed.about)
        }
      } catch (error) {
        console.error("Error parsing saved content:", error)
      }
    }
  }, [])

  const features = [
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
  ]

  return (
    <section id="about" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {content.title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-neutral-300">
          {content.subtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
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
    </section>
  )
}

