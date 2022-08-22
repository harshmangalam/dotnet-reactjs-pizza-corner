import { Box } from "@chakra-ui/react";

export default function DataError({ error }) {
  return <Box as="pre">{JSON.stringify(error, null, 4)}</Box>;
}
