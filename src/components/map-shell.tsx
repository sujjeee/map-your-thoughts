"use client"

import React from "react"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import * as maptilersdk from "@maptiler/sdk"

export default function MapShell() {
  React.useEffect(() => {
    const map = new maptilersdk.Map({
      container: "map",
      style: `https://api.maptiler.com/maps/5c8b8421-3ef7-4fad-966f-f24f623d6c1f/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [0, 20],
      zoom: 2,
      navigationControl: false,
      geolocateControl: false,
    })
  }, [])

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>
}
