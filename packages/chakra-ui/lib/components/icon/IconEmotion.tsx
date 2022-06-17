import type { EmotionGrade } from "@nocker/client"
import React, { FC } from "react"
import {
  BiTired,
  BiConfused,
  BiHappy,
  BiMehBlank,
  BiLaugh,
} from "react-icons/bi"

type Props = {
  className: string
  grade: EmotionGrade
}

export const IconEmotion: FC<Props> = (props) => {
  if (props.grade === 0) {
    return <BiTired className={props.className} size={24} />
  }

  if (props.grade === 1) {
    return <BiConfused className={props.className} size={24} />
  }

  if (props.grade === 2) {
    return <BiMehBlank className={props.className} size={24} />
  }

  if (props.grade === 3) {
    return <BiHappy className={props.className} size={24} />
  }

  if (props.grade === 4) {
    return <BiLaugh className={props.className} size={24} />
  }

  return null
}
