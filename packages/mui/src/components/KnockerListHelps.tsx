import { Divider, List, ListItemButton, ListItemText } from "@mui/material"
import React, { Fragment, FunctionComponent } from "react"
import type { HelpTreeItem } from "../client/types/helpTreeItem"

type Props = {
  title?: string
  isSinglePage?: boolean
  helpTreeItems: HelpTreeItem[]
}

export const KnockerFabTypeListHelps: FunctionComponent<Props> = (props) => {
  return (
    <List>
      {props.helpTreeItems.map((helpTreeItem) => (
        <Fragment key={helpTreeItem.id}>
          <ListItemButton>
            <ListItemText primary={helpTreeItem.name} />
          </ListItemButton>
          <Divider />
          <List disablePadding>
            {helpTreeItem.children.map((item) => {
              if ("parentCategoryId" in item) {
                return (
                  <Fragment key={item.id}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                    <Divider />
                    <List disablePadding>
                      {item.children.map((subItem, index) => (
                        <Fragment key={item.id}>
                          <ListItemButton sx={{ pl: 6 }}>
                            <ListItemText primary={subItem.title} />
                          </ListItemButton>
                          {index < item.children.length + 1 && <Divider />}
                        </Fragment>
                      ))}
                    </List>
                  </Fragment>
                )
              }

              return (
                <ListItemButton key={item.id} sx={{ pl: 4 }}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              )
            })}
          </List>
          <Divider />
        </Fragment>
      ))}
    </List>
  )
}
