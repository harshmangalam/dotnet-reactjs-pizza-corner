import {
  Box,
  Container,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import Pizza from "../../components/Pizza";
export default function PizzaPage() {
  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
        {[...new Array(9)].map((pizza) => (
          <Pizza />
        ))}
      </SimpleGrid>
    </Container>
  );
}
