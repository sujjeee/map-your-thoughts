"use client"

import { Toaster } from "@/components/ui/toaster"
import { LocationProvider } from "@/lib/context"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
import * as React from "react"

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
