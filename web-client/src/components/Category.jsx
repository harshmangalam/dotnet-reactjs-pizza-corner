import {
  Box,
  useColorModeValue,
  Heading,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Category({ id, name, image }) {
  return (
    <Box
      as={Link}
      to={`/category/${id}`}
      bg={useColorModeValue("white", "gray.700")}
      py={6}
      px={2}
      rounded="md"
      borderWidth={"2px"}
    >
      <AspectRatio maxW="200px" ratio={1 / 1} mx="auto">
        <Image rounded={"lg"} objectFit={"cover"} src={image} />
      </AspectRatio>

      <Heading
        textAlign={"center"}
        fontSize={"lg"}
        fontWeight={500}
        textTransform="uppercase"
        mt={4}
      >
        {name}
      </Heading>
    </Box>
  );
}
