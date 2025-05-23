import { Card, IconButton, Flex, Icon, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function RepoCard() {
  return (
    <Card.Root width="350px" bg={{ _dark: "gray.800" }}>
      <Card.Body gap="2">
        <Card.Title mt="2">react-animate</Card.Title>
        <Card.Description>
          A React component library offering a wealth of animation solutions for
          you to create animation.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="space-between" fontSize="14px">
        <Flex align="center" gap="1">
          Javascript
        </Flex>

        <Flex
          align="center"
          gap="1"
          color={{ base: "gray.600", _dark: "whiteAlpha.900" }}>
          <Icon as={FaStar} size="sm" verticalAlign="middle" />
          <Text>1258</Text>
        </Flex>

        <Flex
          align="center"
          gap="1"
          color={{ base: "gray.600", _dark: "whiteAlpha.900" }}>
          <Icon as={FaCodeFork} size="sm" verticalAlign="middle" />
          <Text>259</Text>
        </Flex>

        <IconButton
          as="a"
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on Github"
          size="lg"
          colorPalette="blue"
          variant="outline">
          <FaGithub />
        </IconButton>
      </Card.Footer>
    </Card.Root>
  );
}
