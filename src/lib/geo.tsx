import { headers } from "next/headers"

export function geoLocation() {
  const headersList = headers()
  return {
    country: headersList.get("x-vercel-ip-country") || "Unknown",
    city: headersList.get("x-vercel-ip-city") || "Unknown",
    ip: headersList.get("x-forwarded-for")?.split(",")[0] || "Unknown",
  }
}
