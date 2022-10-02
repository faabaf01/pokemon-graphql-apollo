import { gql } from "@apollo/client";

export const GET_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;

export interface IPoke {
  name: string;
  id: number;
}

export interface PokemonType {
  type: { name: string };
}

export interface PokemonMove {
  move: { name: string };
}

export interface PokemonDetailQuery {
  pokemon: {
    id: number;
    name: string;
    types: PokemonType[];
    moves: PokemonMove[];
  };
}