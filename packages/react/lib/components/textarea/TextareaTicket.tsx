import clsx from "clsx"
import React, { ChangeEventHandler, FC } from "react"
import { useStateComponent } from "../../hooks"

type Props = {
  placeholder: string
  isLoading?: boolean
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

export const TextareaTicket: FC<Props> = (props) => {
  const state = useStateComponent({
    isLoading: props.isLoading,
  })

  return (
    <textarea
      className={clsx(
        "w-full border-none font-sans focus:outline-none dark:bg-gray-800",
        state.isLoading && "cursor-not-allowed opacity-60",
      )}
      style={{ resize: "none" }}
      placeholder={props.placeholder}
      rows={3}
      readOnly={props.isLoading}
      onChange={props.onChange}
    />
  )
}