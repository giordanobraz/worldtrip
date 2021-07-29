import { Flex } from "@chakra-ui/react";
import { Type } from "./Type";

interface ScreenProps {
  fullScreen: boolean | undefined;
}

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

export function Types({ fullScreen }: ScreenProps) {
  return (
    <Flex
      width="100%"
      maxWidth="1160px"
      justifyContent='space-between'
      alignItems="center"
      marginX="auto"
      marginY={["1em", "5em"]}
      wrap={fullScreen ? ['wrap', 'nowrap'] : 'wrap'}
      paddingX={['12', '12', '12', '10']}
    >
      {
        Icons.map(icon => {
          return (
            <Type
              key={icon.id}
              fullScreen={fullScreen}
              icon={icon}
            />
          )
        })
      }
    </Flex>
  );
}