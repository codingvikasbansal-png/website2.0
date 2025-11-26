"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import LazyVideo from "./lazy-video"
import { useToast } from "@/hooks/use-toast"

export function Hero() {
  const { toast } = useToast()

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    toast({
      title: "Coming Soon! 🚀",
      description: "We're working on something amazing. Contact feature will be available soon!",
      className: "bg-black/90 backdrop-blur-xl border-blue-400/50 text-white shadow-[0_0_20px_rgba(96,165,250,0.3)]",
    })
  }

  const buttonNew = (
    <Button 
      onClick={handleContactClick}
      className="rounded-full bg-blue-400 px-6 text-black hover:bg-blue-300 cursor-pointer"
    >
      Chat With Us
    </Button>
  )

  return (
    <section id="tech" className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          <div className="mb-5 flex items-center gap-2">
           
            <p className="text-sm uppercase tracking-[0.25em] text-blue-400/80">Charm AI Technologies</p>
          </div>
          <h1 className="mt-3 text-center text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">NEXT-GEN</span>
            <span className="block text-blue-400 drop-shadow-[0_0_20px_rgba(96,165,250,0.35)]">MERN STACK</span>
            <span className="block">DEVELOPMENT</span>
          </h1>
          <div className="mt-6">{buttonNew}</div>

          {/* Phone grid mimic */}
          <div className="mt-10 grid w-full gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((p, i) => {
              const visibility = i <= 2 ? "block" : i === 3 ? "hidden md:block" : i === 4 ? "hidden xl:block" : "hidden"

              return (
                <div key={i} className={visibility}>
                  <PhoneCard title={p.title} sub={p.sub} tone={p.tone} gradient={p.gradient} videoSrc={p.videoSrc} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneCard({
  title = "8°",
  sub = "Clear night. Great for render farm runs.",
  tone = "calm",
  gradient = "from-[#0f172a] via-[#5a0a0a] to-[#2a0505]",
  videoSrc,
}: {
  title?: string
  sub?: string
  tone?: string
  gradient?: string
  videoSrc?: string
}) {
  return (
    <div className="relative rounded-[28px] glass-border bg-neutral-900 p-2">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        <LazyVideo
          src={
            videoSrc ??
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b0f3222371106db366a14ca1c29cef55-1b1EWVSa4w3FL2zslcaCGYTy9vcxjF.mp4"
          }
          className="absolute inset-0 h-full w-full object-cover"
          autoplay={true}
          loop={true}
          muted={true}
          playsInline={true}
          aria-label={`${title} - ${sub}`}
        />

        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">{title}</div>
            <p className="text-xs text-white/70">{sub}</p>
            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-blue-400">
              {tone === "calm" ? "mern stack" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const phoneData = [
  {
    title: "React",
    sub: "Build dynamic user interfaces with modern React.",
    tone: "frontend",
    gradient: "from-[#0b0b0b] via-[#0f172a] to-[#020617]",
    videoSrc:"https://cdn.pixabay.com/video/2020/07/16/44839-440059628_large.mp4",
  },
  {
    title: "Node.js",
    sub: "Scalable server-side applications with Node.js.",
    tone: "backend",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "https://www.shutterstock.com/shutterstock/videos/1105126637/preview/stock-footage-glowing-neon-line-js-file-document-download-js-button-icon-isolated-on-black-background-js-file.webm",
  },
  {
    title: "Langchain",
    sub: "AI-powered applications with Langchain integration.",
    tone: "ai",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "https://www.shutterstock.com/shutterstock/videos/3856523453/preview/stock-footage-businessman-interacting-with-ai-agent-interface-using-futuristic-holographic-icons-representing.webm",
  },
  {
    title: "AWS",
    sub: "Cloud infrastructure and deployment on AWS.",
    tone: "cloud",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "https://www.shutterstock.com/shutterstock/videos/3606267839/preview/stock-footage-logo-aws-bouncing-on-transparent-background-x-size-alpha-chanel-frame-rate-fps.webm",
  },
 {
    title: "MySQL",
    sub: "Robust database solutions with MySQL.",
    tone: "database",
    gradient: "from-[#001028] via-[#0b355e] to-[#052e5e]",
    videoSrc: "https://www.shutterstock.com/shutterstock/videos/1100974613/preview/stock-footage-sql-word-and-sql-statements-structured-query-language-code-on-a-blue-background-d-animation.webm",
  },
]
