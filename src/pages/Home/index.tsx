import { Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Banner } from "./Banner";


export function Home() {
    return (
        <Flex direction="column">
            <Header />
            <Banner />
        </Flex>
    );
}