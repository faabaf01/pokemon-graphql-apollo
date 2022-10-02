import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { Pokemon } from "../graphql/GetAllPokemons";

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonCards({ pokemons }: Props) {
  return (
    <SimpleGrid
      minChildWidth="160px"
      spacing="40px"
      justifyItems={"center"}
      p={10}
    >
      {pokemons.map((p: Pokemon, i: number) => {
        return (
          <Link key={i} to={`/details?name=${p.name}`}>
            <Box bg={"honeydew"} rounded={10}>
              <Box
                maxW={"300px"}
                height="200px"
                p={4}
                textTransform="capitalize"
                fontWeight={"bold"}
                _hover={{
                  background: "white",
                  color: "pink.500",
                }}
              >
                {p.id}
                <br />
                {p.name}

                <Image
                  w={{ base: "80px", sm: "90px", lg: "150px" }}
                  h={{ base: "80px", sm: "90px", lg: "150px" }}
                  objectFit={"fill"}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
                  alt="pokemon_image"
                />
              </Box>
            </Box>
          </Link>
        );
      })}
    </SimpleGrid>
  );
}
