import {
  Box,
  useColorModeValue,
  Heading,
  Image,
  AspectRatio,
} from "@chakra-ui/react";

export default function Category() {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} py={6} px={2} rounded="md">
      <AspectRatio maxW="200px" ratio={1 / 1} mx="auto">
        <Image
          rounded={"lg"}
          objectFit={"cover"}
          src={
            "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
          }
        />
      </AspectRatio>

      <Heading
        textAlign={"center"}
        fontSize={"lg"}
        fontWeight={500}
        textTransform="uppercase"
        mt={4}
      >
        Non Veg Pizza
      </Heading>
    </Box>
  );
}
