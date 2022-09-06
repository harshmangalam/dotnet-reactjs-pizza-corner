import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import Pizza from "../../components/Pizza";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPizzaOfCategory } from "../../services/pizza";
import { fetchCategory } from "../../services/category";

export default function CategoryDetailsPage() {
  const { categoryId } = useParams();
  const {
    isLoading: isCategoryLoading,
    isError: isCategoryError,
    data: categoryData,
  } = useQuery(["category", categoryId], () => fetchCategory(categoryId));

  const {
    isLoading: isPizzaLoading,
    isError: isPizzaError,
    data: pizzaData,
  } = useQuery(["pizzas", categoryId], () => fetchPizzaOfCategory(categoryId));
  return (
    <Box>
      {isCategoryLoading && <Spinner size={"lg"} />}
      {isCategoryError && <p>Error...</p>}
      {categoryData?.data && (
        <Box>
          <Heading fontSize={"2xl"} textTransform="uppercase" mt={4}>
            {categoryData?.data?.name}
          </Heading>
          <Text maxW={"md"} mt={2}>
            {categoryData?.data?.description}
          </Text>
        </Box>
      )}

      <Box mt={8}>
        {isPizzaLoading && <Spinner size={"lg"} />}
        {isPizzaError && <p>Error...</p>}
        {pizzaData?.data && (
          <SimpleGrid columns={[1, 1, 2, 3,4]} spacing={6}>
            {pizzaData.data.map((pizza) => (
              <Pizza key={pizza._id} pizza={pizza} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Box>
  );
}
