import {
  Avatar,
  AvatarBadge,
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";
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
        <PopoverBody></PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
