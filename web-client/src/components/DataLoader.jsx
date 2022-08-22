import { Box, Center, Spinner } from "@chakra-ui/react";

export default function DataLoader() {
  return (
    <Box pos="absolute" display={"grid"} placeItems="center">
      <Spinner size={"lg"} />
    </Box>
  );
}
