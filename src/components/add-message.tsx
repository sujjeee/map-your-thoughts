"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogClose } from "@radix-ui/react-dialog"
import { Info, Plus } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import { number, type z } from "zod"

import { addUser } from "@/actions/users"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { usersSchema } from "@/db/schemas"
import { useLocation } from "@/lib/context"
import { showErrorToast } from "@/lib/errors"
import { cn, getCountyName, getNewPosition } from "@/lib/utils"
import { toast } from "sonner"
import { Icons } from "./icons"

type Inputs = z.infer<typeof usersSchema>

export function AddMessage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const { setLocation } = useLocation()

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

            const newPosition = getNewPosition(position, 500)
            const latitude = newPosition.latitude
            const longitude = newPosition.longitude

            const country = await getCountyName(latitude, longitude)

            const updatedData = {
              ...data,
              latitude,
              longitude,
              country,
            }

            const { error } = await addUser(updatedData)
            if (error) throw new Error(error)

            toast("Thanks for sharing 🎉!")

            setLocation(updatedData.latitude, updatedData.longitude, 20)

            setIsDialogOpen(false)
            form.reset()
            setIsLoading(false)
          },
          (error) => {
            showErrorToast(error)
            setIsLoading(false)
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
            Map your thoughts
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="size-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95" />
              </HoverCardTrigger>
              <HoverCardContent className="w-80" align="start">
                <div className="font-normal text-sm">
                  Don&#39;t worry, your exact location won&#39;t be disclosed.
                  We&#39;ll randomize your latitude and longitude within a 500m
                  to 1000m area to protect your privacy.
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
