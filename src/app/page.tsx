import { AddMessage } from "@/components/add-message"
import { Icons } from "@/components/icons"
import MapShell from "@/components/map-shell"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <MapShell />
      <div className="absolute top-2  right-2 ">
        <div className=" flex flex-col items-center justify-center gap-1">
          <AddMessage />
          <Link
            href="https://github.com/sujjeee"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "icon",
              }),
            )}
          >
            <Icons.github className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
