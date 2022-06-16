import clsx from "clsx"
import React, { ChangeEventHandler, FC } from "react"
import { useStateComponent } from "../../hooks"

type Props = {
  value: string
  placeholder: string
  isLoading?: boolean
  isDisabled?: boolean
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}

export const TextareaTicket: FC<Props> = (props) => {
  const state = useStateComponent({
    isDisabled: props.isDisabled,
    isLoading: props.isLoading,
  })

  return (
    <textarea
      className={clsx(
        "w-full border-0 p-0 font-sans focus:outline-none dark:bg-gray-800",
        state.isLoading && "cursor-not-allowed opacity-60",
      )}
      style={{ resize: "none" }}
      value={props.value}
      placeholder={props.placeholder}
      rows={3}
      readOnly={props.isLoading}
      onChange={props.onChange}
    />
  )
}
