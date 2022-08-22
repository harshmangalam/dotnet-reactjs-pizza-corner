import { Box, Center } from "@chakra-ui/react";

export default function DataError({ error }) {
  return <Center as="pre">{JSON.stringify(error, null, 4)}</Center>;
}
