import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { PokemonMove } from "../graphql/GetPokemonDetail";

interface Props {
  pokeMoves: PokemonMove[];
}

export default function PokemonMoves({ pokeMoves }: Props) {
  return (
    <>
      <Flex flex={1} paddingLeft={4}>
        <Heading> Moves: </Heading>
      </Flex>
      <SimpleGrid
        minChildWidth="120px"
        spacing="4px"
        paddingBlock={10}
        paddingInline={20}
      >
        {pokeMoves.map((p: PokemonMove, i: number) => (
          <Box
            key={i}
            bg="green.200"
            width="120px"
            rounded="10"
            textAlign={"center"}
            p="5px"
          >
            {p.move.name}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
