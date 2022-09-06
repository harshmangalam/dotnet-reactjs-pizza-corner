import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiChakraui, SiDevdotto } from "react-icons/si";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { DiDotnet } from "react-icons/di";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"container.xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Technology</ListHeader>
            {technology.map((link) => (
              <Button
                variant={"outline"}
                size="sm"
                key={link.name}
                as={"a"}
                target="_blank"
                href={link.href}
                leftIcon={<Icon as={link.icon} fontSize="lg" />}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Stack align={"start"} spacing={4}>
              {company.map((link) => (
                <Button
                  as={Link}
                  variant="link"
                  fontWeight={"normal"}
                  to={link.href}
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Locations</ListHeader>
            <Stack align={"start"} spacing={4}>
              {locations.map((link) => (
                <Button
                  variant="link"
                  fontWeight={"normal"}
                  as={Link}
                  to={link.href}
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Social Media</ListHeader>
            {socilaLinks.map((link) => (
              <Button
                variant={"outline"}
                size="sm"
                key={link.name}
                as={"a"}
                target="_blank"
                href={link.href}
                leftIcon={<Icon as={link.icon} fontSize="lg" />}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"} fontFamily="cursive">
          Pizza Corner An Open Source Project
        </Text>
      </Box>
    </Box>
  );
}

const socilaLinks = [
  {
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/harshmangalam",
  },
  {
    name: "DEV Community",
    icon: SiDevdotto,
    href: "https://dev.to/harshmangalam",
  },
  {
    name: "Linkedin",
    icon: IoLogoLinkedin,
    href: "https://www.linkedin.com/in/harshmangalam/",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "https://twitter.com/HarshMangalam6",
  },
];

const company = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const locations = [
  { name: "Hyderabad", href: "/" },
  { name: "Bangalore", href: "/" },
  { name: "Delhi", href: "/" },
  { name: "Surat", href: "/" },
  { name: "Kolkata", href: "/" },
];

const technology = [
  {
    name: "Dotnet",
    icon: DiDotnet,
    href: "https://dotnet.microsoft.com",
  },
  {
    name: "Node JS",
    icon: FaNodeJs,
    href: "https://nodejs.org/",
  },
  {
    name: "React JS",
    icon: FaReact,
    href: "https://reactjs.org/",
  },
  {
    name: "Chakra UI",
    icon: SiChakraui,
    href: "https://chakra-ui.com/",
  },
];
