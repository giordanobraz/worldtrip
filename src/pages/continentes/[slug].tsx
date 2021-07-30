/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Center, Flex, Heading, HStack, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react"
import { Header } from "../../components/Header";
// import { SlideItemDefinition } from "../../components/Slider";
import { Info } from "./Info";
//@ts-ignore
import ReactCountryFlag from "react-country-flag"
import { useLocation, useParams } from "react-router-dom";
import { SlideItemDefinition } from "../../components/Slider";


export function Continente() {
    const params = useParams();
    const { state } = useLocation<{ continente: SlideItemDefinition }>();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <>
            <Header backLink fullScreen={isWideVersion}/>
            <Box
                background={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${state.continente.imgPath}')`}
                bgPosition='center'
                bgRepeat='no-repeat'
                bgSize='cover'
                height={['150', '500']}
            >
                <Box
                    maxW='1240'
                    h='100%'
                    mx='auto'
                    px={10}
                    position='relative'
                >
                    {isWideVersion ? (
                        <Heading
                            as='h1'
                            fontWeight='600'
                            fontSize='5xl'
                            color='gray.50'
                            position='absolute'
                            bottom='60px'
                            textTransform='capitalize'
                        >
                            {state.continente.title}
                        </Heading>
                    ) : (
                        <Center w='100%' h='100%'>
                            <Text
                                as='h1'
                                fontWeight='600'
                                fontSize='1.75rem'
                                color='gray.50'
                            >
                                {state.continente.title}
                            </Text>
                        </Center>
                    )}
                </Box>
            </Box>

            <Box
                maxW='1240'
                h='100%'
                mx='auto'
                px={['4', '10']}
            >
                <Flex
                    direction={['column', 'row']}
                    justify={'space-between'}
                    align='center'
                    mt={['6', '20']}
                    mb={['8', '20']}
                >
                    <Text maxW='600' fontSize={['sm', '2xl']} lineHeight={['5', '9']} textAlign='justify' fontWeight='400'>
                        {state.continente.resume}
                    </Text>

                    <HStack spacing={10} mt={['4', '0']}>
                        <Info
                            legend="países"
                            numberOf={state.continente.countries}
                        />

                        <Info
                            legend="línguas"
                            numberOf={state.continente.languages}
                        />

                        <Info
                            legend="cidades +100"
                            numberOf={state.continente.cities}
                            hasTooltip={true}
                        />
                    </HStack>
                </Flex>

                <Box>
                    <Heading
                        as='h1'
                        fontWeight='500'
                        fontSize={['2xl', '4xl']}
                        color='gray.600'
                    >
                        Cidades +100
                    </Heading>

                    <SimpleGrid columns={[1, 4]} spacing={[5, 10]} my={['5', '45px']}>
                        {state.continente.someCities.map((city) => (
                            <Box key={city.name} width='256px' marginX={['auto', '0']}>
                                <Image borderTopRadius='4' src={city.image} alt='Londres' w='100%' h='173' objectFit='cover' />
                                <Flex
                                    justify='space-between'
                                    align='center'
                                    p={6}
                                    border='1px'
                                    borderColor='yellow.100'
                                    borderTop='0'
                                    borderBottomRadius='4'
                                >
                                    <Flex direction='column'>
                                        <Heading as='h3' fontSize='xl' fontWeight='600' mb={3}>{city.name}</Heading>
                                        <Text color='gray.500' fontSize='md' fontWeight='500'>{city.country}</Text>
                                    </Flex>

                                    <ReactCountryFlag
                                        style={{
                                            fontSize: '2em',
                                            lineHeight: '2em',
                                            borderRadius: '50%',
                                            objectFit: 'cover'
                                        }}
                                        aria-label={city.country}
                                        countryCode={city.country_code}
                                        svg
                                    />
                                </Flex>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}