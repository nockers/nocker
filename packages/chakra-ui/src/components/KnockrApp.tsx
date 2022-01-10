import { CloseIcon } from "@chakra-ui/icons"
import {
  Box,
  HStack,
  IconButton,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react"
import React, { VFC } from "react"

type Props = {
  onClose(): void
}

export const KnockrApp: VFC<Props> = (props) => {
  return (
    <Box
      position={"fixed"}
      bottom={4}
      right={4}
      borderWidth={1}
      rounded={"md"}
      p={2}
      width={"sm"}
    >
      <Stack>
        <HStack justify={"space-between"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {"フィードバック"}
          </Text>
          <IconButton
            aria-label={"閉じる"}
            variant={"ghost"}
            rounded={"full"}
            size={"xs"}
            icon={<CloseIcon />}
            onClick={props.onClose}
          />
        </HStack>
        <Textarea placeholder={"Here is a sample placeholder"} p={2} />
      </Stack>
    </Box>
  )
}
