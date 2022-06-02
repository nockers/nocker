import React, { FC } from "react"

type Props = {
  config: {
    buttonSubmitText: string
    inputPlaceholder: string
  }
  text: string
  isLoading: boolean
  onChangeText(text: string): void
  onSubmit(): Promise<void>
}

export const NockerFormTicket: FC<Props> = (props) => {
  return (
    <div className={"grid w-full gap-y-4"}>
      <textarea
        className={"w-full focus:outline-none"}
        rows={3}
        placeholder={props.config.inputPlaceholder}
        style={{ resize: "none" }}
      />
      <button
        className={"w-full rounded-md bg-blue-500 py-1 text-slate-50 outline-0"}
      >
        {props.config.buttonSubmitText}
      </button>
    </div>
  )
}
