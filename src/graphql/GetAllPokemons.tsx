import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }
`;

export interface Pokemon {
  id: string;
  name: string;
  image: string;
}
export interface PokemonQuery {
  pokemons: { results: Pokemon[] };
}
