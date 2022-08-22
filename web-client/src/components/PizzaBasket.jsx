import {
  Avatar,
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
export default function PizzaBasket() {
  return (
    <Popover>
      <PopoverTrigger>
        <Box>
          <Tooltip label={"Pizza basket"}>
            <IconButton icon={<GiShoppingCart size={24} />} />
          </Tooltip>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Pizza Basket</PopoverHeader>
        <PopoverBody>
          <Stack spacing={4} mb={4}>
            {[...new Array(6)].map((item) => (
              <HStack justify={"space-between"}>
                <HStack>
                  <Avatar src="https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp" />
                  <Stack spacing={0}>
                    <Heading fontSize={"md"}>Non veg pizza</Heading>
                    <Text fontSize={"sm"}>Rs 234</Text>
                  </Stack>
                </HStack>
                <Tag rounded={"full"} colorScheme="purple">
                  3 Items
                </Tag>
              </HStack>
            ))}
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
