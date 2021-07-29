import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            width="100%"
            justifyContent="center"
            alignItems="center"
            paddingY="3"
        >
            <Image
                maxWidth={["9em", "12em"]}
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt="World Trip" />
        </Flex>
    );



}