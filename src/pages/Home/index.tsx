import { Center, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider";
import { Types } from "../../components/Types";

export function Home() {
    const largeVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            direction="column"
        >
            <Header fullScreen={largeVersion}/>
            <Banner />
            <Types fullScreen={largeVersion} />
            <Center
                width='100px'
                marginX='auto'                
                borderTopWidth='2px'
                borderColor='gray.600'
                marginY={["1.5em", "3.25em"]}
            ></Center>
            <Center
                marginX='auto'
                maxWidth="800px"
            >
                <Heading
                    textAlign="center"
                    fontWeight={500}
                    fontSize={['xl', '4xl']}
                    paddingY={['6', '14']}
                    lineHeight={['30px', '3.375rem']}
                >
                    Vamos nessa?<br />
                    Então escolha seu continente
                </Heading>
            </Center>
            <Slider />
        </Flex>
    );
}