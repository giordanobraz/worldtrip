import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <SimpleGrid
            backgroundImage={process.env.PUBLIC_URL + '/background.png'}
            bgRepeat="no-repeat"
            bgSize="cover"
            h="335px"
            w="100%"
            columns={2}
            spacing={2}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    fontSize="4xl"
                    color="#F5F8FA"
                    fontWeight={500}
                    lineHeight="54px"
                    fontStyle="normal"
                >
                    5 Continentes, <br />infinitas possibilidades.
                </Text>
                <Text
                    fontSize="md"
                    color="#DADADA"
                    fontWeight={400}
                    lineHeight="28px"
                >
                    Chegou a hora de tirar do papel a viagem que você<br />sempre sonhou.
                </Text>
            </Box>

            <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    position="absolute"
                    src={process.env.PUBLIC_URL + '/airplane.svg'}
                    alt="Avião"
                    transform="rotate(3deg)"
                    marginTop="120px"                    
                />                
            </Box>

        </SimpleGrid>
    );
}