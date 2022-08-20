import { HStack, Image } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";
import ThemeSwitcher from "./ThemeSwitcher";
import PizzaBasket from "./PizzaBasket";

export default function Navbar() {
  return (
    <HStack h={16} justify="space-between" px={4}>
      <Image
        src="https://cdn.dribbble.com/users/404971/screenshots/1241486/pizza-logo.png"
        width="60x"
        height="60px"
      />

      <HStack>
        <ProfileMenu />
        <PizzaBasket />
        <ThemeSwitcher />
      </HStack>
    </HStack>
  );
}
