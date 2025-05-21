import { Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <Heading as="h1" size="3xl" textAlign="center">
        One Repo Away.
      </Heading>
      <Text fontStyle="italic" color="gray.700">
        The perfect GitHub repo is just one search away.
      </Text>
    </header>
  );
}
