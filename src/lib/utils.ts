import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getCountyName(lat: number, lon: number): Promise<string> {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data.address.country || "Unknown"
  } catch (error) {
    console.error("Error fetching county name:", error)
    return "Unknown"
  }
}

export function asleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
