import { Divider, List, ListItemButton, ListItemText } from "@mui/material"
import React, { Fragment, VFC } from "react"
import { WidgetHelp } from ".."

type Props = {
  title?: string
  isSinglePage?: boolean
  helps: WidgetHelp[]
}

export const KnockrListHelps: VFC<Props> = (props) => {
  return (
    <List>
      {props.helps.map((help) => (
        <Fragment key={help.id}>
          <ListItemButton>
            <ListItemText primary={help.title} />
          </ListItemButton>
          <Divider />
        </Fragment>
      ))}
    </List>
  )
}
