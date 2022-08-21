import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Pizza from "../../components/Pizza";
export default function CategoryDetailPage() {
  return (
    <Box>
      <Heading
        textAlign={"center"}
        fontSize={"lg"}
        fontWeight={500}
        textTransform="uppercase"
        mt={4}
      >
        Non Veg Pizza
      </Heading>
      <Text>
        A delight for veggie lovers! Choose from our wide range of delicious
        vegetarian pizzas, it's softer and tastier
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={6} mt={6}>
        {[...new Array(9)].map((pizza) => (
          <Pizza />
        ))}
      </SimpleGrid>
    </Box>
  );
}
