import { Flex, Heading, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";

export default function Header() {
  return (
    <Flex as="header" pt="4" pb="4" align="center" justify="space-between">
      <Flex direction="column" alignItems="center" ml="auto" mr="auto">
        <Heading as="h1" textStyle="3xl" fontFamily="fira_codelight">
          One Repo Away.
        </Heading>
        <Text
          fontStyle="italic"
          color={{ base: "gray.700", _dark: "gray.300" }}>
          The perfect GitHub repo is just one search away.
        </Text>
      </Flex>

      <ColorModeButton />
    </Flex>
  );
}
