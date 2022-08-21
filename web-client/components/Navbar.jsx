import { Box, Container, Heading, HStack, Icon, Image } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import PizzaBasket from "./PizzaBasket";
import { GiFullPizza } from "react-icons/gi";

export default function Navbar() {
  return (
    <Box as="nav" borderBottomWidth={"1px"}>
      <Container maxW={"container.xl"}>
        <HStack h={16} justify="space-between">
          <HStack>
            <Icon color={"yellow.500"} as={GiFullPizza} fontSize="5xl" />
            <Heading display={["none", "block"]} fontSize={"xl"}>
              Pizza Shop
            </Heading>
          </HStack>

          <HStack>
            <ProfileMenu />
            <PizzaBasket />
            <ThemeSwitcher />
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
