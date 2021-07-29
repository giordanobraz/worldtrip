import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Flex
            w="100%"
            h={["163px", "250px", "250px", "335px"]}
            bgImage={process.env.PUBLIC_URL + '/images/background.png'}
            bgPosition={["100% 20%", "100% 20%", "100% 30%"]}
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Flex
                justify={['center', 'space-between']}
                align="center"
                w="100%"
                mx="auto"
                paddingX={["2em", "2em", "2em", "10em"]}
            >
                <div>
                    <Heading
                        color="gray.100"
                        fontWeight="500"
                        fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}>
                        5 continentes,<br />infinitas possibilidades.
                    </Heading>
                    <Text
                        color="gray.300"
                        mt="5"
                        fontSize={["0.8rem", "xl"]}
                        maxW={["100%", "100%", "100%", "550px"]}>
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </div>
                <Image
                    width={["300px", "300px", "300px", "430px"]}
                    display={['none', 'none',
                        'block']}
                    src={process.env.PUBLIC_URL + '/images/airplane.svg'}
                    alt="Avião amarelo voando com algumas nuvens ao redor."
                    transform="translateY(48px)"
                    ml="8"
                />
            </Flex>
        </Flex>
    );
}