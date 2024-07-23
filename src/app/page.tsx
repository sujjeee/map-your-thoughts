import { AddMessage } from "@/components/add-message"
import MapShell from "@/components/map-shell"

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <MapShell />
      <div className="absolute top-2  right-2 ">
        <div className=" flex items-center justify-center gap-2">
          <AddMessage />
        </div>
      </div>
    </div>
  )
}
