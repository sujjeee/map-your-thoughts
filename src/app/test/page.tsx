import { geoLocation } from "@/lib/geo"

export default function GeoPage() {
  const { country, city, ip } = geoLocation()

  return (
    <div>
      <h1>Geolocation Information</h1>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>IP Address: {ip}</p>
    </div>
  )
}
