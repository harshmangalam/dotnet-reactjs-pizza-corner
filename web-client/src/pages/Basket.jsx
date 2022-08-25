import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useBasket } from "../context/basket";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function BasketPage() {
  const { cart, increaseBasketPizzaCount, decreaseBasketPizzaCount } =
    useBasket();

  const totalItems = cart.reduce((prev, curr) => prev + curr.count, 0);
  const totalPrice = cart.reduce(
    (prev, curr) => prev + curr.item.price * curr.count,
    0
  );
  const disabledCheckout = totalItems === 0 && totalPrice === 0;
  return (
    <Container>
      <SimpleGrid spacing={6} columns={1}>
        <Box>
          <Stack spacing={4}>
            {cart.map((data) => (
              <HStack justify={"space-between"}>
                <HStack spacing={6}>
                  <Avatar src={data.item.image} size={"xl"} />
                  <Stack spacing={0}>
                    <Heading fontSize={"xl"}>{data.item.name}</Heading>
                    <Text fontSize={"lg"}>
                      Rs {data.item.price * data.count}
                    </Text>
                  </Stack>
                </HStack>
                <Box>
                  <HStack spacing={4}>
                    <IconButton
                      size={"sm"}
                      icon={<AiOutlineMinus size={16} />}
                      aria-label="Minus"
                      onClick={() => decreaseBasketPizzaCount(data.item._id)}
                      disabled={data.count <= 1}
                    />
                    <Heading fontSize={"md"}>{data.count}</Heading>

                    <IconButton
                      size={"sm"}
                      icon={<AiOutlinePlus size={16} />}
                      aria-label="Plus"
                      onClick={() => increaseBasketPizzaCount(data.item._id)}
                    />
                  </HStack>
                </Box>
              </HStack>
            ))}
          </Stack>
        </Box>

        <Box
          bg={useColorModeValue("white", "gray.700")}
          p={4}
          rounded="md"
          shadow={"outline"}
        >
          <Stack spacing={4}>
            <Heading fontSize={"3xl"}>Checkout Details</Heading>
            <HStack justify={"space-between"}>
              <Text fontSize={"xl"}>Total Item(s)</Text>
              <Tag size={"lg"} fontSize={"md"}>
                {totalItems}
              </Tag>
            </HStack>
            <HStack justify={"space-between"}>
              <Text fontSize={"xl"}>Total Pice(s)</Text>
              <Tag size={"lg"} fontSize={"md"}>
                {totalPrice}
              </Tag>
            </HStack>

            <Box>
              <Button disabled={disabledCheckout} colorScheme={"twitter"}>
                Proceed to checkout
              </Button>
            </Box>
          </Stack>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
