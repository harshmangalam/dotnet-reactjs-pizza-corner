import { SimpleGrid } from "@chakra-ui/react";
import Category from "../../../components/Category";
export default function CategoryListPage() {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={6}>
      {[...new Array(9)].map((category) => (
        <Category />
      ))}
    </SimpleGrid>
  );
}
