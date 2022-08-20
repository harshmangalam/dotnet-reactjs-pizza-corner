import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  HStack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
export default function ProfileMenu() {
  return (
    <Menu>
      <Tooltip label={"Profile menu"}>
        <MenuButton aria-label="Profile Manu">
          <Avatar name={"Harsh Mangalam"} size={"sm"} src={""} />
        </MenuButton>
      </Tooltip>

      <MenuList>
        <MenuItem as="a">
          <HStack spacing={4}>
            <Avatar name={"Harsh Mangalam"} size={"md"} src={""} />
            <Text fontWeight={"bold"}>Harsh Mangalam</Text>
          </HStack>
        </MenuItem>

        <MenuDivider />

        <MenuItem icon={<IoLogOutOutline size={24} />}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
