import { Box, Heading, HStack, Spacer } from '@chakra-ui/react'
import { useState } from 'react'
import Navigate from './Navigate'
import PokemonLogo from './PokemonLogo'

export default function Header() {
  const [page, setPage] = useState("pokemons");

  return (
    <Box bg={"gray.600"}>
      <HStack textAlign={"center"} p={8}>
        <PokemonLogo />
        <Spacer />
        <Heading
          color={"white"}
          fontSize={{ base: "10px", sm: "20px", md: "30px", lg: "50px" }}
          margin={2}
        >
          Pokemon App
        </Heading>
        <Spacer />
        <Navigate setPage={setPage} />
      </HStack>
    </Box>
  );
}
