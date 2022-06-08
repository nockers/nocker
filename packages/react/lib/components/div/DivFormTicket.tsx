import React, { FC } from "react"
import { ButtonFilled } from "../button/ButtonFilled"
import { TextareaTicket } from "../textarea/TextareaTicket"

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

export const DivFormTicket: FC<Props> = (props) => {
  return (
    <div className={"grid w-full gap-y-4"}>
      <TextareaTicket
        value={props.text}
        placeholder={props.config.inputPlaceholder}
        isLoading={props.isLoading}
        onChange={(event) => {
          props.onChangeText(event.target.value)
        }}
      />
      <ButtonFilled
        isDisabled={props.text.length < 2}
        isLoading={props.isLoading}
        onClick={props.onSubmit}
      >
        {props.config.buttonSubmitText}
      </ButtonFilled>
    </div>
  )
}
