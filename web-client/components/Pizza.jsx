import { AspectRatio, Box, Image, useColorModeValue } from "@chakra-ui/react";
export default function Pizza() {
  return (
    <Box bg={useColorModeValue("white", "gray.700")} p={4}>
      <AspectRatio maxW="400px" ratio={1 / 1} mx="auto">
        <Image
          rounded={"lg"}
          objectFit={"cover"}
          src={
            "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
          }
        />
      </AspectRatio>
    </Box>
  );
}
