import {
  Box,
  Center,
  Flex,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";

export default function DataLoader() {
  return (
    <Center>
      <Center
        bg={useColorModeValue("white", "gray.700")}
        shadow="md"
        p="2"
        rounded="full"
      >
        <Spinner color="blue.400" size="lg" />
      </Center>
    </Center>
  );
}
