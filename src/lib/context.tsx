import React, { createContext, useContext, useState } from "react"

interface LocationProps {
  latitude: number
  longitude: number
  zoom: number
}

interface LocationContextType {
  location: LocationProps
  setLocation: (latitude: number, longitude: number, zoom: number) => void
}

const initialLocation: LocationProps = {
  latitude: 15,
  longitude: 15,
  zoom: 1.7
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
)

export const LocationProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [location, setLocation] = useState<LocationProps>(initialLocation)

  const setLocationData = (
    latitude: number,
    longitude: number,
    zoom: number
  ) => {
    setLocation({ latitude, longitude, zoom })
  }

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation: setLocationData
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export const useLocation = () => {
  const context = useContext(LocationContext)

  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider")
  }

  return context
}
