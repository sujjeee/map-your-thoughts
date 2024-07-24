"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Info, Plus } from "lucide-react"
import { DialogClose } from "@radix-ui/react-dialog"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { number, type z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { usersSchema } from "@/db/schemas"
import { cn, getCountyName } from "@/lib/utils"
import { addUser } from "@/actions/users"
import { showErrorToast } from "@/lib/errors"
import { Icons } from "./icons"
import { toast } from "sonner"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { useLocation } from "@/lib/context"

type Inputs = z.infer<typeof usersSchema>

export function AddMessage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const { location, setLocation } = useLocation()

  const form = useForm<Inputs>({
    resolver: zodResolver(usersSchema),
    defaultValues: {
      message: "",
      country: "Unknown",
      latitude: 1,
      longitude: 1,
    },
  })

  async function onSubmit(data: Inputs) {
    try {
      setIsLoading(true)

      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            console.log({ position })
            const latitude =
              position.coords.latitude + (Math.random() - 0.5) * 10
            const longitude =
              position.coords.longitude + (Math.random() - 0.5) * 10
            const county = await getCountyName(latitude, longitude)

            const updatedData = {
              ...data,
              latitude,
              longitude,
              country: county,
            }

            const { error } = await addUser(updatedData)

            if (error) throw new Error(error)

            toast("Added new message")

            setLocation(updatedData.latitude, updatedData.longitude, 10)

            setIsDialogOpen(false)
            form.reset()
            setIsLoading(false)
          },
          (error) => {
            console.error("Error getting location:", error)
            throw error
          },
        )
      } else {
        console.error("Geolocation is not supported by this browser.")
        throw new Error("Geolocation is not supported by this browser.")
      }
    } catch (error) {
      showErrorToast(error)
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Plus className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[500px]" showClose={false}>
        <DialogHeader>
          <DialogTitle className=" flex  justify-between w-full">
            Share your thoughts
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="size-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="start">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={10}
                      className="border-2"
                      placeholder="Express yourself freely. Share your ideas, stories, or anything on your mind. What are you thinking today?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className="w-full flex items-center justify-center gap-3">
          <DialogClose
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
                className: "w-full",
              }),
            )}
          >
            Cancel
          </DialogClose>
          <Button
            size={"sm"}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 size-4 animate-spin" />
            )}
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
