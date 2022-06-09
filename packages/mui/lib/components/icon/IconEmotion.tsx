import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfiedRounded"
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutralRounded"
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfiedRounded"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfiedRounded"
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded"
import { EmotionGrade } from "@nocker/client"
import React, { FC } from "react"

type Props = {
  grade: EmotionGrade
}

export const IconEmotion: FC<Props> = (props) => {
  if (props.grade === 0) {
    return <SentimentVeryDissatisfiedIcon />
  }

  if (props.grade === 1) {
    return <SentimentDissatisfiedIcon />
  }

  if (props.grade === 2) {
    return <SentimentNeutralIcon />
  }

  if (props.grade === 3) {
    return <SentimentSatisfiedIcon />
  }

  if (props.grade === 4) {
    return <SentimentVerySatisfiedIcon />
  }

  return null
}
