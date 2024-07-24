"use client"

import React from "react"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import * as maptilersdk from "@maptiler/sdk"
import { GetUsersType } from "@/actions/users"

interface MapShellProps {
  users: GetUsersType
}

export default function MapShell({ users }: MapShellProps) {
  React.useEffect(() => {
    const map = new maptilersdk.Map({
      container: "map",
      style: `https://api.maptiler.com/maps/5c8b8421-3ef7-4fad-966f-f24f623d6c1f/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [0, 20],
      zoom: 2,
      navigationControl: false,
      geolocateControl: false,
    })

    users.forEach((user) => {
      const popupContent = `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <h3>${user.message}</h3>
         
          <p>[${user.country}]</p>
        </div>
      `

      new maptilersdk.Marker()
        .setLngLat([user.longitude, user.latitude] as maptilersdk.LngLatLike)
        .setPopup(new maptilersdk.Popup().setHTML(popupContent))
        .addTo(map)
    })
  }, [users])

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>
}
