import { Heading, HStack, Icon, Image } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import PizzaBasket from "./PizzaBasket";
import { FaPizzaSlice } from "react-icons/fa";

export default function Navbar() {
  return (
    <HStack h={16} justify="space-between" px={4} borderBottomWidth="1px">
      <HStack>
        <Icon color={"yellow.500"} as={FaPizzaSlice} fontSize="5xl" />
        <Heading fontSize={"xl"}>Pizza Shop</Heading>
      </HStack>

      <HStack>
        <ProfileMenu />
        <PizzaBasket />
        <ThemeSwitcher />
      </HStack>
    </HStack>
  );
}
