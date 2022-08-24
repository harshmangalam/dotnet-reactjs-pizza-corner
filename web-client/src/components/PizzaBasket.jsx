import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Tag,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useBasket } from "../context/basket";
export default function PizzaBasket() {
  const {cart} = useBasket()
  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <Tooltip label={"Pizza basket"}>
            <Box pos="relative">
            <Button rightIcon={<GiShoppingCart size={24} />} >
              {cart.length}
              </Button>
          
            </Box>
          </Tooltip>
        </Box>
      </PopoverTrigger>
      <PopoverContent >
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Pizza Basket</PopoverHeader>
        <PopoverBody>
          <Stack spacing={4} mb={4}>
            {cart.length ? cart.map(({item,count}) => (
              <Flex align={"flex-start"} justify={"space-between"} key={item._id}>
                <HStack>
                  <Avatar src={item.image} />
                  <Stack spacing={0}>
                    <Heading fontSize={"sm"}>{item.name}</Heading>
                    <Text fontSize={"sm"}>Rs {item.price}</Text>
                  </Stack>
                </HStack>
                <Tag fontSize={"sm"} colorScheme="purple">
                  {count}
                </Tag>
              </Flex>
            )): (
              <Text textAlign={"center"}>No Pizza</Text>
            )}
          </Stack>

          <Divider mt={4} mb={2} />
          <Flex justifyContent={"center"}>
            <Button
              as={Link}
              to="/baskets"
              colorScheme={"blue"}
              variant={"ghost"}
              rounded="full"
            >
              Go to Baskets
            </Button>
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
