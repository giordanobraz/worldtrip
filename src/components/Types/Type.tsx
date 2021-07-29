import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { Icon } from ".";

interface TypeProps {
  icon: Icon
}

export function Type({ icon }: TypeProps) {

  return (
    <Flex direction="column" align="center" justify="center">
      <Image
        src={process.env.PUBLIC_URL + `/icons/` + icon.icon_name}
        w={["40px", "40px", "60px", "85px"]}
        h={["40px", "40px", "60px", "85px"]}
        mb="6" />

      <Text
        fontWeight="600"
        color="gray.700"
        fontSize={["sm", "sm", "md", "xl", "2xl"]}>
        {icon.label}
      </Text>
    </Flex>
  )
}