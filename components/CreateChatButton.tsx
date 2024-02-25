"use client"

import { Button } from "./ui/button"
import { MessageSquarePlusIcon } from "lucide-react"

function CreateChatButton() {
  return (
    <Button variant={'ghost'} className="">
        <MessageSquarePlusIcon/>
    </Button>
  )
}

export default CreateChatButton