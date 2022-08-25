import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useBasket } from "../context/basket";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
export default function BasketPage() {
  const { cart } = useBasket();
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
                  <Text fontSize={"lg"}>Rs {data.item.price}</Text>
                </Stack>
              </HStack>
              <Box>
                <HStack spacing={4}>
                  <IconButton
                    size={"sm"}
                    icon={<AiOutlinePlus size={16} />}
                    aria-label="Plus"
                  />
                  <Heading fontSize={"md"}>{data.count}</Heading>
                  <IconButton
                    size={"sm"}
                    icon={<AiOutlineMinus size={16} />}
                    aria-label="Minus"
                  />
                </HStack>
              </Box>
            </HStack>
          ))}
        </Stack>
      </Box>

      <Box bg={useColorModeValue("white", "gray.700")} p={4} rounded="md" shadow={"outline"}>
        <Stack spacing={4}>
          <HStack>
            <Text>Total Pizza</Text>
            <Heading fontSize={"md"}>{cart.length}</Heading>
          </HStack>
          <HStack>
            <Text>Total Pizza</Text>
            <Heading fontSize={"md"}>{cart.length}</Heading>
          </HStack>
          <Box>
            <Button colorScheme={"twitter"}>
                Proceed to checkout
            </Button>
          </Box>
        </Stack>
      </Box>
    </SimpleGrid>
    </Container>
  );
}
