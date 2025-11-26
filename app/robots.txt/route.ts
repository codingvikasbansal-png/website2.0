// Static export compatible - use environment variable or default
const getOrigin = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://charmai.in'
}

export async function GET() {
  const origin = getOrigin()

  const lines = [
    "# robots.txt for Skitbit — allow AI crawlers and search engines",
    "User-agent: GPTBot",
    "Allow: /",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    "User-agent: ChatGPT-User",
    "Allow: /",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    "User-agent: ClaudeBot",
    "Allow: /",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    "User-agent: CCBot",
    "Allow: /",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    "User-agent: PerplexityBot",
    "Allow: /",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /privacy",
    "Disallow: /terms",
    "Disallow: /t&c",
    "",
    `Sitemap: ${origin}/sitemap.xml`,
  ].join("\n")

  return new Response(lines, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
