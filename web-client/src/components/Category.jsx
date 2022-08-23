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
     
      rounded="md"
      borderWidth={"2px"}
    >
      <AspectRatio w="full" maxW="300px" ratio={1 / 1} mx="auto">
        <Image roundedTop={"md"} objectFit={"cover"} src={image} />
      </AspectRatio>

      <Heading
        textAlign={"center"}
        fontSize={"lg"}
        fontWeight={500}
        textTransform="uppercase"
        mt={4}
        p={2}
      >
        {name}
      </Heading>
    </Box>
  );
}
