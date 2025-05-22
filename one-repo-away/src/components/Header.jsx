import { Container, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container as="header" style={{ textAlign: "center" }}>
      <Heading as="h1" size="3xl">
        One Repo Away.
      </Heading>
      <Text fontStyle="italic" color="gray.700">
        The perfect GitHub repo is just one search away.
      </Text>
    </Container>
  );
}
