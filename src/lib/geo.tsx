import { headers } from "next/headers"

export function geoLocation() {
  const headersList = headers()
  
  return {
    country: headersList.get("x-vercel-ip-country"),
    city: headersList.get("x-vercel-ip-city"),
    ip: headersList.get("x-real-ip"),
  }
}
