import {
  AspectRatio,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
export default function Pizza() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      p={4}
      shadow="outline"
      rounded="lg"
    >
      <AspectRatio maxW="400px" ratio={1 / 1} mx="auto">
        <Image
          rounded={"lg"}
          objectFit={"cover"}
          src={
            "https://www.dominos.co.in/theme2/front/images/menu-images/my-nonveg.webp"
          }
        />
      </AspectRatio>
      <Box mt={4}>
        <HStack>
          <Heading flex={1} fontSize={"lg"}>
            CHICKEN GOLDEN DELIGHT
          </Heading>
          <Tooltip label="Non Veg Pizza">
            <IconButton
              size={"sm"}
              rounded="full"
              icon={
                <Icon
                  as={MdOutlineRadioButtonChecked}
                  color="red.300"
                  fontSize="lg"
                />
              }
            />
          </Tooltip>
        </HStack>
        <Text mt={2}>
          Mmm! Barbeque chicken with a topping of golden corn loaded with extra
          cheese. Worth its
        </Text>
        <HStack mt={6} justify={"space-between"} w="full">
          <Button
            size={"sm"}
            leftIcon={<GiShoppingCart size={20} />}
            colorScheme={"twitter"}
          >
            Add to Basket
          </Button>
          <Tag size={"lg"} rounded="full" variant="subtle" colorScheme="purple">
            <TagLeftIcon boxSize="20px" as={BiRupee} />
            <TagLabel>140</TagLabel>
          </Tag>
        </HStack>
      </Box>
    </Box>
  );
}
