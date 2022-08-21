import { Heading, HStack, Icon } from "@chakra-ui/react";

import { GiFullPizza } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <HStack as={Link} to="/">
      <Icon color={"yellow.500"} as={GiFullPizza} fontSize="5xl" />
      <Heading display={["none", "block"]} fontSize={"xl"}>
        PizzaHouse
      </Heading>
    </HStack>
  );
}
