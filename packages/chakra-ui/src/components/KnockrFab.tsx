import { Button } from "@chakra-ui/react"
import React, { useState, VFC } from "react"
import { KnockrApp } from "./KnockrApp"

type Props = {
  projectId: string
}

export const KnockrFab: VFC<Props> = () => {
  const [isOpen, setOpen] = useState(false)

  if (isOpen) {
    return (
      <KnockrApp
        onClose={() => {
          setOpen(false)
        }}
      />
    )
  }

  return (
    <Button
      position={"fixed"}
      bottom={4}
      right={4}
      variant={"solid"}
      onClick={() => {
        setOpen(true)
      }}
    >
      {"何かお困りですか？"}
    </Button>
  )
}
