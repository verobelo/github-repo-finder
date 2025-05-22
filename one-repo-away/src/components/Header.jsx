import { Container, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container as="header" centerContent pt="4" pb="4">
      <Heading as="h1" textStyle="3xl" fontFamily="fira_codelight">
        One Repo Away.
      </Heading>
      <Text fontStyle="italic" color="gray.700">
        The perfect GitHub repo is just one search away.
      </Text>
    </Container>
  );
}
