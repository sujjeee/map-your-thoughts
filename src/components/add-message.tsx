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
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Info, Plus } from "lucide-react"
import { DialogClose } from "@radix-ui/react-dialog"

export function AddMessage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Plus className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className=" sm:max-w-[500px]" showClose={false}>
        <DialogHeader>
          <DialogTitle className=" flex  justify-between w-full">
            Share your thoughts
            <Info className="size-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95" />
          </DialogTitle>
          <DialogDescription>
            Express yourself freely. Share your ideas, stories, or anything on
            your mind. What are you thinking today?
          </DialogDescription>
        </DialogHeader>
        <Textarea rows={10} className="border-2" />
        <DialogFooter className="w-full flex items-center justify-center gap-1">
          <DialogClose className="w-full">
            <Button type="reset" variant={"outline"} className="w-full">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" className="w-full">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
