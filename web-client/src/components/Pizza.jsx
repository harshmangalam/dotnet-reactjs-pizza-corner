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
  useToast,
} from "@chakra-ui/react";
import { BiRupee } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useBasket } from "../context/basket";
export default function Pizza({ pizza }) {
  const { addToBasket } = useBasket();
  const toast = useToast();
  const { _id, name, image, price,isVeg ,description} = pizza;

  const handleAddToBasket = () => {
    const isAdded = addToBasket(pizza);
    if(!isAdded){
      toast({
        title: "Basket",
        description: "Pizza already in basket",
        isClosable: true,
        status:"error"
      });
      return
    }
    toast({
      title: "Basket",
      description: "Pizza added in basket",
      isClosable: true,
    });
  };
  return (
    <Box
      bg={useColorModeValue("white", "gray.700")}
      p={4}
      shadow="outline"
      rounded="lg"
    >
      <AspectRatio maxW="400px" ratio={1 / 1} mx="auto">
        <Image rounded={"lg"} objectFit={"cover"} src={image} />
      </AspectRatio>
      <Box mt={4}>
        <HStack>
          <Heading flex={1} fontSize={"xl"} noOfLines={2}>
            {name}
          </Heading>
         <Box>
         <Tooltip label={isVeg ? "Veg Pizza":"Non Veg Pizza"}>
            <IconButton
              size={"sm"}
              rounded="full"
              icon={
                <Icon
                  as={MdOutlineRadioButtonChecked}
                  color={isVeg ? "green.500":"red.300"}
                  fontSize="lg"
                />
              }
            />
          </Tooltip>
         </Box>
        </HStack>
        <Text mt={2} noOfLines={2}>
          {description}
        </Text>
        <HStack mt={6} justify={"space-between"} w="full">
          <Button
            size={"sm"}
            leftIcon={<GiShoppingCart size={20} />}
            colorScheme={"twitter"}
            onClick={handleAddToBasket}
          >
            Add to Basket
          </Button>
          <Tag size={"lg"} rounded="full" variant="subtle" colorScheme="purple">
            <TagLeftIcon boxSize="20px" as={BiRupee} />
            <TagLabel>{price}</TagLabel>
          </Tag>
        </HStack>
      </Box>
    </Box>
  );
}
