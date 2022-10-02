import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { PokemonType } from "../graphql/GetPokemonDetail";

interface Props {
  pokeTypes: PokemonType[];
}

function PokemonTypes({ pokeTypes }: Props) {
  return (
    <Flex flex={1} paddingLeft={4}>
      <Box>
        <HStack paddingBlock={10} minWidth={7} spacing={"4px"}>
          <Heading paddingRight={4}>Types:</Heading>

          {pokeTypes.map((p: PokemonType, i: number) => (
            <Box
              key={i}
              bg="cyan.300"
              width="120px"
              rounded="10"
              textAlign={"center"}
              p="5px"
            >
              {p.type.name}
            </Box>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
}

export default PokemonTypes;
