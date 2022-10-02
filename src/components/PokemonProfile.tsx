import { Circle, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { IPoke } from "../graphql/GetPokemonDetail";

interface Props {
  props: IPoke;
}

export default function PokemonProfile({ props }: Props) {
  console.log(props);
  return (
    <Flex flex={1} justify={"center"}>
      <Stack align={"center"}>
        <Heading color={"GrayText"}>{props.id}</Heading>
        <Text fontSize={"2xl"} textTransform={"uppercase"}>
          {props.name}
        </Text>
        <Circle bg={"honeydew"}>
          <Image
            w={{ base: "100px", sm: "150px", lg: "200px" }}
            h={{ base: "100px", sm: "150px", lg: "200px" }}
            objectFit={"fill"}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${props.id}.gif`}
            alt="pokemon-image"
          />
        </Circle>
      </Stack>
    </Flex>
  );
}
