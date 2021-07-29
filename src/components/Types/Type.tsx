import { Flex, Icon as ChakraIcon, Image, Text } from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa'
import { Icon } from ".";

interface TypeProps {
  icon: Icon,
  fullScreen: boolean | undefined;
}

export function Type({ icon, fullScreen }: TypeProps) {

  if (!fullScreen) {
    return (
      <Text
        fontSize='lg'
        fontWeight='500'
        _last={{ margin: ['0 auto', '0'] }}
      >
        <ChakraIcon
          as={FaCircle}
          fontSize='0.5em'
          color='yellow.500'
          mr={2} />
        {icon.label}
      </Text>
    )
  }

  return (
    <Flex
      direction='column'
      justifyContent="center"
      alignItems='center'
      width='150px'
    >
      <Image
        src={process.env.PUBLIC_URL + `/icons/` + icon.icon_name}
        maxWidth="85px"
      />

      <Text
        color="gray.700"
        fontWeight="600"
        fontSize="1.2em"
        marginTop={6}
      >
        {icon.label}
      </Text>
    </Flex>
  )
}