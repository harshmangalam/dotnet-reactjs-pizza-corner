import { SimpleGrid } from "@chakra-ui/react";
import {useQuery} from "@tanstack/react-query"
import Pizza from "../components/Pizza";
import DataLoader from "../components/DataLoader";
import DataError from "../components/DataError";
import {fetchPizza} from "../services/pizza"
export default function PizzaPage() {
  const {isLoading,isError,data,error} = useQuery(["pizza"],fetchPizza)

  if (isLoading) {
    return <DataLoader />;
  }

  if (error) {
    return <DataError error={error} />;
  }
  return (
    <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6}>
      {data.data.map((pizza) => (
        <Pizza />
      ))}
    </SimpleGrid>
  );
}
