import { Link } from "@tanstack/react-location";
import { useQuery } from '@apollo/client';
import Header from "../components/Header";
import { Button, Stack } from "@chakra-ui/react";
import {
  GET_POKEMON_DETAIL,
  PokemonDetailQuery,
} from "../graphql/GetPokemonDetail";
import PokemonMoves from "../components/PokemonMoves";
import PokemonTypes from "../components/PokemonTypes";
import PokemonProfile from "../components/PokemonProfile";
import ShowLoading from "../components/ShowLoading";
import ShowError from "../components/ShowError";

export default function Details() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");
  const gqlVariables = {
    variables: { name },
  };

  const { loading, error, data } = useQuery<PokemonDetailQuery>(
    GET_POKEMON_DETAIL,
    gqlVariables
  );

  return (
    <Stack bg={"orange.200"}>
      <Header />
      <Link to="/">
        <Button colorScheme={"pink"}>Back to Home</Button>
      </Link>

      {error && <ShowError />}
      {loading && <ShowLoading />}
      {data && (
        <>
          <PokemonProfile props={data!.pokemon} />
          <PokemonTypes pokeTypes={data!.pokemon.types} />
          <PokemonMoves pokeMoves={data!.pokemon.moves} />
        </>
      )}
    </Stack>
  );
}
