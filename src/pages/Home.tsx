//no need to use usestate and useeffect
import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import { PokemonQuery } from "../graphql/GetAllPokemons";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "../graphql/GetAllPokemons";
import ShowLoading from "../components/ShowLoading";
import ShowError from "../components/ShowError";

export default function Home() {
  const PAGE_SIZE = 14;
  const [page, setPage] = useState(0);

  const { data, loading, error } = useQuery<PokemonQuery>(GET_ALL_POKEMONS, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });

  return (
    <Box maxW={"full"} alignContent={"center"} bg="orange.200">
      <Header />

      <Stack align={"center"}>
        <Text
          fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          p={4}
        >
          Welcome to the Home Page! Choose a Pokemon:
        </Text>
      </Stack>

      <HStack justify={"center"}>
        <Button
          colorScheme={"pink"}
          disabled={!page}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>

        <Spacer />
        <Box>Page {page + 1}</Box>
        <Spacer />

        <Button
          colorScheme={"pink"}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </HStack>

      {error && <ShowError />}
      {loading ? (
        <ShowLoading />
      ) : (
        <PokemonCards pokemons={data!.pokemons.results} />
      )}
    </Box>
  );
}
