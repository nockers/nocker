import { Stack } from "@mui/material"
import React, { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const BoxBackdrop: FC<Props> = (props) => {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 4000,
        overflow: "hidden",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Stack>
  )
}
