import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  useColorModeValue,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Pizza from "../components/Pizza";
export default function HomePage() {
  return (
    <Box>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            fontFamily="cursive"
          >
            <Text as={"span"} position={"relative"}>
              Pizza Corner
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Explore and order
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Order pizza and get it to your home within 45 minutes with
            contactless delivery. Now you can explore different variant of pizza
            add to your basket and proceed for checkout.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Button
              to="/pizza"
              as={Link}
              rounded={"full"}
              size={"lg"}
              colorScheme="blue"
              px={6}
              rightIcon={<BsArrowRight size={20} />}
            >
              Explore Now
            </Button>
            <Button
              as={Link}
              to="/auth"
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              leftIcon={<AiOutlineUserAdd size={24} />}
            >
              Authenticate
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Blob
            w={"150%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("blue.200", "blue.400")}
          />
          <Box
            position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"full"}
            overflow={"hidden"}
          >
            <Image
              alt={"Pizza Avatar"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={
                "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              }
            />
          </Box>
        </Flex>
      </Stack>

      <Box mt={8}>
        <Stack
          direction={["column", "row"]}
          justify={"space-between"}
          align="center"
        >
          <Heading fontSize={["2xl", "3xl"]}>Fatured Categories</Heading>
          <Button
            rightIcon={<BsArrowRight size={20} />}
            as={Link}
            to="/category"
            variant={"ghost"}
            size={"sm"}
          >
            Explore
          </Button>
        </Stack>
        <SimpleGrid
          justifyContent={"center"}
          mt={6}
          columns={[1, 2, 3, 4]}
          spacing={6}
        >
          {[...new Array(4)].map((category) => (
            <Category />
          ))}
        </SimpleGrid>
      </Box>
      <Box mt={8}>
        <Stack
          direction={["column", "row"]}
          justify={"space-between"}
          align="center"
        >
          <Heading fontSize={["2xl", "3xl"]}>Trending Pizzas</Heading>
          <Button
            rightIcon={<BsArrowRight size={20} />}
            as={Link}
            to="/pizza"
            variant={"ghost"}
            size={"sm"}
          >
            Explore
          </Button>
        </Stack>
        <SimpleGrid
          justifyContent={"center"}
          mt={6}
          columns={[1, 2, 3, 4]}
          spacing={6}
        >
          {[...new Array(4)].map((pizza) => (
            <Pizza />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
