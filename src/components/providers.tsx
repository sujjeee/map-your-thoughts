"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { LocationProvider } from "@/lib/context"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProvider>
    <LocationProvider>
      {children}
      <Toaster />
    </LocationProvider>
    // </ThemeProvider>
  )
}
