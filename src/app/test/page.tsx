import { geoLocation } from "@/lib/geo"

export default function GeoPage() {
  const { country, ip1, country1, city, ip } = geoLocation()

  return (
    <div>
      <h1>Geolocation Information</h1>
      <p>Country1: {country1}</p>
      <p>Country: {country}</p>
      <p>City: {city}</p>
      <p>IP Address1: {ip1}</p>
      <p>IP Address: {ip}</p>
    </div>
  )
}
