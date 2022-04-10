import { Box, Button, Paper, Stack } from "@mui/material"
import { captureException } from "@sentry/minimal"
import html2canvas from "html2canvas"
import React, { useEffect, useRef, useState, VFC } from "react"
import { useResize } from "../hooks"
import { KnockrBackdrop } from "./KnockrBackdrop"
import { KnockrCanvas } from "./KnockrCanvas"

type Props = {
  onCapture(imageText: string): void
  onCancel(): void
}

export const KnockrCapure: VFC<Props> = (props) => {
  const boxRef = useRef<HTMLDivElement>(null)

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  const onResize = () => {
    try {
      if (boxRef.current === null) return
      setCanvasSize({
        width: boxRef.current.clientWidth,
        height: boxRef.current.clientHeight,
      })
    } catch (error) {
      captureException(error)
    }
  }

  useResize(onResize)

  const [backgroundImage, setBackgroundImage] = useState<string | null>(null)

  const onCapture = async () => {
    try {
      if (boxRef.current === null) return
      const canvas = await html2canvas(boxRef.current)
      const dataURL = canvas.toDataURL("image/png")
      props.onCapture(dataURL)
    } catch (error) {
      captureException(error)
    }
  }

  const onCancel = () => {
    props.onCancel()
  }

  const onCaptureBackground = async () => {
    try {
      const canvas = await html2canvas(document.body)
      const dataURL = canvas.toDataURL()
      setBackgroundImage(dataURL)
      onResize()
    } catch (error) {
      captureException(error)
    }
  }

  useEffect(() => {
    onCaptureBackground()
  }, [])

  if (backgroundImage === null) {
    return null
  }

  return (
    <KnockrBackdrop>
      <Paper
        ref={boxRef}
        sx={{
          position: "relative",
          width: "calc(100vw - 4rem)",
          height: "calc(100vh - 4rem)",
          overflow: "hidden",
          boxShadow: "0px 0px 8px rgba(0,0,0,0.4)",
          borderWidth: 4,
        }}
      >
        <Box
          component={"img"}
          alt={"background"}
          src={backgroundImage}
          sx={{ width: "100%", overflow: "hidden" }}
        />
        <KnockrCanvas width={canvasSize.width} height={canvasSize.height} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            backgroundColor: "rgba(255,255,255,0.8)",
            backdropFilter: "blur(2px)",
            zIndex: 4,
          }}
        >
          <Box sx={{ padding: 1 }}>
            <Stack direction={"row"} justifyContent={"flex-end"} spacing={1}>
              <Button
                variant={"text"}
                size={"small"}
                onClick={onCancel}
                sx={{ pt: 1 }}
              >
                {"キャンセル"}
              </Button>
              <Button
                variant={"contained"}
                size={"small"}
                onClick={onCapture}
                sx={{ pt: 1 }}
              >
                {"完了"}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </KnockrBackdrop>
  )
}
