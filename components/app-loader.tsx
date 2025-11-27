"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function AppLoader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    // Show loader for 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      // Remove from DOM after fade out animation completes
      setTimeout(() => {
        setIsMounted(false)
      }, 500) // Match transition duration
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-400/10 animate-pulse" />
      
      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        {/* Logo with animation */}
        <div className="relative">
          <div className="absolute inset-0 animate-ping">
            <div className="h-24 w-24 rounded-full bg-blue-400/20 blur-xl" />
          </div>
          <div className="relative animate-pulse">
            <Image
              src="/logo.png"
              alt="Charm AI Logo"
              width={80}
              height={80}
              className="h-20 w-20 object-contain drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            Charm AI
          </h2>
          <div className="flex items-center space-x-1">
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-bounce" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-progress" />
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const left = Math.random() * 100
          const top = Math.random() * 100
          const delay = Math.random() * 3
          const duration = 3 + Math.random() * 2
          return (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-blue-400/30 animate-float"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

