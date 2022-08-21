import { SimpleGrid } from "@chakra-ui/react";
import Pizza from "../../components/Pizza";
export default function PizzaPage() {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
      {[...new Array(9)].map((pizza) => (
        <Pizza />
      ))}
    </SimpleGrid>
  );
}
