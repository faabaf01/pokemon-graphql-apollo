import { Flex, Spinner } from "@chakra-ui/react";

export default function ShowLoading() {
  return (
    <Flex justify={"center"}>
      <Spinner
        thickness="6px"
        speed="0.65s"
        emptyColor="white"
        color="pink.400"
        size="xl"
      />
    </Flex>
  );
}
