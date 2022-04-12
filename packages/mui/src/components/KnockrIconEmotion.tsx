import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfiedRounded"
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutralRounded"
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfiedRounded"
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfiedRounded"
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded"
import React, { VFC } from "react"

type Props = {
  emotion: 0 | 1 | 2 | 3 | 4
}

export const KnockrIconEmotion: VFC<Props> = (props) => {
  if (props.emotion === 0) {
    return <SentimentVeryDissatisfiedIcon />
  }

  if (props.emotion === 1) {
    return <SentimentDissatisfiedIcon />
  }

  if (props.emotion === 2) {
    return <SentimentNeutralIcon />
  }

  if (props.emotion === 3) {
    return <SentimentSatisfiedIcon />
  }

  if (props.emotion === 4) {
    return <SentimentVerySatisfiedIcon />
  }

  return null
}
