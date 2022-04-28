import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt"
import { IconButton } from "@mui/material"
import React, { VFC } from "react"

export const ButtonLike: VFC = () => {
  return (
    <label htmlFor="icon-button-file">
      <IconButton color="primary" aria-label="upload picture" component="span">
        <ThumbUpAltIcon />
      </IconButton>
    </label>
  )
}
