import { Box, Container, Heading, HStack, Icon, Image } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import PizzaBasket from "./PizzaBasket";
import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
export default function Navbar() {
  return (
    <Box as="nav" borderBottomWidth={"1px"}>
      <Container maxW={"container.xl"}>
        <HStack h={16} justify="space-between">
          <Logo />

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
