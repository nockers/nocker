import { List, ListItemButton, ListItemText } from "@mui/material"
import { WidgetHelp } from "@nocker/client"
import React, { FC, Fragment } from "react"

type Props = {
  title?: string
  isSinglePage?: boolean
  helps: WidgetHelp[]
}

export const NockerListHelps: FC<Props> = (props) => {
  return (
    <List dense>
      {props.helps.map((help) => (
        <Fragment key={help.id}>
          <ListItemButton>
            <ListItemText
              primary={help.title}
              primaryTypographyProps={{ sx: { fontSize: 14 } }}
            />
          </ListItemButton>
        </Fragment>
      ))}
    </List>
  )
}
