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
import { Plus } from "lucide-react"

export function AddMessage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size={"icon"}>
          <Plus className="size-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Share your thoughts</DialogTitle>
          <DialogDescription>
            Express yourself freely. Share your ideas, stories, or anything on
            your mind. What are you thinking today?
          </DialogDescription>
        </DialogHeader>
        <Textarea rows={10} className="border-2" />
        <DialogFooter>
          <Button type="button">Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
