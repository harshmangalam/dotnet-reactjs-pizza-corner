import { Box, Icon, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { CgSun, CgMoon } from "react-icons/cg";
export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Tooltip
        label={
          colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <IconButton
          onClick={toggleColorMode}
          aria-label="Theme switch"
          icon={
            <Icon as={colorMode === "dark" ? CgSun : CgMoon} fontSize={"lg"} />
          }
        />
      </Tooltip>
    </Box>
  );
}
