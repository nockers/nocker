import { WidgetHelp } from "@knockr/client"
import { List, ListItemButton, ListItemText } from "@mui/material"
import React, { Fragment, VFC } from "react"

type Props = {
  title?: string
  isSinglePage?: boolean
  helps: WidgetHelp[]
}

export const KnockrListHelps: VFC<Props> = (props) => {
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
