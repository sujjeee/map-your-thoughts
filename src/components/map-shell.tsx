"use client"

import { GetUsersType } from "@/actions/users"
import * as maptilersdk from "@maptiler/sdk"
import React, { useRef, useEffect } from "react"
import "@maptiler/sdk/dist/maptiler-sdk.css"
import { useLocation } from "@/lib/context"
import { getTagColor, Tag } from "@/lib/constants"

interface MapShellProps {
  users: GetUsersType
}

export default function MapShell({ users }: MapShellProps) {
  const mapRef = useRef<maptilersdk.Map | null>(null)
  const { location } = useLocation()

  useEffect(() => {
    maptilersdk.config.apiKey = "UKz3Xo5QH5nQLhwTKhqb"
    const map = new maptilersdk.Map({
      container: "map",
      style: `https://api.maptiler.com/maps/5c8b8421-3ef7-4fad-966f-f24f623d6c1f/style.json?key=UKz3Xo5QH5nQLhwTKhqb`,
      center: [0, 20],
      zoom: 2,
      navigationControl: false,
      geolocateControl: false,
    })

    mapRef.current = map

    users.forEach((user) => {
      const popupContent = `
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <h3>${user.message}</h3>

          <p>[${user.country}]</p>
        </div>
      `

      new maptilersdk.Marker({
        color: getTagColor(user.tag as Tag),
      })
        .setLngLat([user.longitude, user.latitude] as maptilersdk.LngLatLike)
        .setPopup(new maptilersdk.Popup().setHTML(popupContent))
        .addTo(map)
    })

    map.flyTo({
      center: [location.longitude, location.latitude],
      zoom: location.zoom,
      essential: true,
    })

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>
}
