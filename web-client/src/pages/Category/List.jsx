import { SimpleGrid } from "@chakra-ui/react";
import Category from "../../components/Category";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/category";
import DataLoader from "../../components/DataLoader";
import DataError from "../../components/DataError";
export default function CategoryListPage() {
  const { isLoading, isError, data, error } = useQuery(
    ["categories"],
    fetchCategories
  );

  if (isLoading) {
    return <DataLoader />;
  }

  if (error) {
    return <DataError error={error} />;
  }
  return (
    <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6}>
      {data.data.map((category) => (
        <Category {...category} />
      ))}
    </SimpleGrid>
  );
}
