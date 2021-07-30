import { Icon, Image, Flex, Grid } from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

interface HeaderProps {
    backLink?: boolean;
    fullScreen: boolean | undefined;
}


export function Header({ backLink = false, fullScreen = true }: HeaderProps) {
    return (
        <Flex
            as="header"
            width="100%"
            height={["50px", "100px"]}
            marginX="auto"
            paddingX="1rem"
            align="center"
            justify="center">
            <Grid
                height="100%"
                marginX="auto"
                width="100%"
                maxWidth="1160px"
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent="center"
                alignSelf="start"
            >
                {backLink && (
                    <Link to='/'>
                        <Icon as={FiChevronLeft} fontSize={[20, 40]} justifySelf="start" />
                    </Link>
                )}

                <Image
                    width={["81px", "184px"]}
                    src={process.env.PUBLIC_URL + '/images/logo.png'}
                    alt="World Trip"
                    justifySelf="center"
                    gridColumn="2"
                />
            </Grid>
        </Flex>
    );



}