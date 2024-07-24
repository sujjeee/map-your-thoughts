import { getUsers } from "@/actions/users"
import { AddMessage } from "@/components/add-message"
import { Icons } from "@/components/icons"
import MapShell from "@/components/map-shell"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default async function Home() {
  const users = await getUsers()
  return (
    <div className="relative w-full h-screen">
      <MapShell users={users} />
      <div className="absolute top-2  right-2 ">
        <div className=" flex flex-col items-center justify-center gap-1">
          <AddMessage />
          <Link
            href="https://github.com/sujjeee/map-your-thoughts"
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
