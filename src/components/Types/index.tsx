import { Box, Flex } from "@chakra-ui/react";
import { Type } from "./Type";

export interface Icon {
  id: number;
  icon_name: string;
  label: string;
}

const Icons: Icon[] = [
  {
    id: 1,
    icon_name: "cocktail.svg",
    label: "Vida Noturna"
  },
  {
    id: 2,
    icon_name: "surf.svg",
    label: "Praia"
  },
  {
    id: 3,
    icon_name: "building.svg",
    label: "Moderno"
  },
  {
    id: 4,
    icon_name: "museum.svg",
    label: "Clássico"
  },
  {
    id: 5,
    icon_name: "earth.svg",
    label: "E mais..."
  },
];

export function Types() {
  return (
    <Flex
      flexFlow="row wrap"
      justifyContent={["center", "space-between"]}
      alignItems="center"
      marginTop={["1em", "1.2em", "1.6em","5em"]}
      paddingX={["0.8em", "1em", "1.3em", "3em", "10em"]}
    >
      {
        Icons.map(icon => {
          return (
            <Box key={icon.id}
              marginX="10px"
              marginY="10px"
            >
              <Type icon={icon} />
            </Box>
          )
        })
      }
    </Flex>
  );
}