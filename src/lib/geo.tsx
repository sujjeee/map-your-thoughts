import { headers } from "next/headers"

export function geoLocation() {
  const headersList = headers()
  return {
    country1: headersList.get("x-vercel-ip-country-region") || "Unknown",
    country: headersList.get("x-vercel-ip-country") || "Unknown",
    city: headersList.get("x-vercel-ip-city") || "Unknown",
    ip1: headersList.get("x-real-ip") || "Unknown",
    ip: headersList.get("x-forwarded-for")?.split(",")[0] || "Unknown",
  }
}
