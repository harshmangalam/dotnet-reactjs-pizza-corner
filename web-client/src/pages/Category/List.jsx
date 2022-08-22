import { SimpleGrid } from "@chakra-ui/react";
import Category from "../../components/Category";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../services/category";
import DataLoader from "../../components/DataLoader";
export default function CategoryListPage() {
  const { isLoading, isError, data } = useQuery("categories", fetchCategories);

  if (true) {
    return <DataLoader />;
  }
  return (
    <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={6}>
      {[...new Array(9)].map((category) => (
        <Category />
      ))}
    </SimpleGrid>
  );
}
