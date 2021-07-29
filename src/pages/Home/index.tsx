import { Flex } from "@chakra-ui/react";
import { Banner } from "../../components/Banner/Banner";
import { Header } from "../../components/Header";
import { Types } from "../../components/Types";



export function Home() {
    return (
        <Flex direction="column">
            <Header />
            <Banner />
            <Types />
        </Flex>
    );
}