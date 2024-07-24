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

interface Position {
  coords: {
    latitude: number
    longitude: number
  }
}

interface NewPosition {
  latitude: number
  longitude: number
}

// Source: ChatGPT
export function getNewPosition(
  currentPosition: Position,
  distance: number
): NewPosition {
  const latitude = currentPosition.coords.latitude
  const longitude = currentPosition.coords.longitude

  // Convert degrees to radians
  const latRad = latitude * (Math.PI / 180)
  const lonRad = longitude * (Math.PI / 180)

  // Randomly generate a bearing
  const bearing = Math.random() * 2 * Math.PI

  // Calculate the new position
  const earthRadius = 6371e3 // meters

  const newLat = Math.asin(
    Math.sin(latRad) * Math.cos(distance / earthRadius) +
      Math.cos(latRad) * Math.sin(distance / earthRadius) * Math.cos(bearing)
  )

  const newLon =
    lonRad +
    Math.atan2(
      Math.sin(bearing) * Math.sin(distance / earthRadius) * Math.cos(latRad),
      Math.cos(distance / earthRadius) - Math.sin(latRad) * Math.sin(newLat)
    )

  // Convert back to degrees
  const newLatitude = newLat * (180 / Math.PI)
  const newLongitude = newLon * (180 / Math.PI)

  return {
    latitude: newLatitude,
    longitude: newLongitude
  }
}
