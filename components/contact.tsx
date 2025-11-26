"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hr@charmai.com",
      href: "mailto:hr@charmai.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 83840 01984",
      href: "tel:+918384001984",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Pearls Omaxe Tower, Netaji Subhash Place, Pitampura, Delhi, 110034",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="container mx-auto px-4 py-16 sm:py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Get In Touch
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-neutral-300">
          Have a project in mind? Let's discuss how we can bring your vision to life.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <Card className="liquid-glass border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
              <p className="mt-2 text-sm text-neutral-400">
                Reach out to us through any of these channels.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/10 hover:bg-black/30 hover:border-blue-400/30 transition-all group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-400/10 group-hover:bg-blue-400/20 transition-colors">
                    <info.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neutral-400">{info.label}</p>
                    <p className="mt-1 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

