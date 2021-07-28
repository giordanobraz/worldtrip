import { Box } from "@chakra-ui/react";

export function Header() {
    return (
        <Box
            maxWidth={1920}
            maxHeight="100px"
            marginX="auto"
            marginY="0"
            paddingY="5"
        >

            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="World Trip" />

        </Box>
    );



}