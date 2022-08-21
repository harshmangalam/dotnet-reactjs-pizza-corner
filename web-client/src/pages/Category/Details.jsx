import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Pizza from "../../../components/Pizza";
export default function CategoryDetailsPage() {
  return (
    <Box>
      <Heading fontSize={"2xl"} textTransform="uppercase" mt={4}>
        Non Veg Pizza
      </Heading>
      <Text maxW={"md"} mt={2}>
        A delight for veggie lovers! Choose from our wide range of delicious
        vegetarian pizzas, it's softer and tastier
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={6} mt={8}>
        {[...new Array(9)].map((pizza) => (
          <Pizza />
        ))}
      </SimpleGrid>
    </Box>
  );
}