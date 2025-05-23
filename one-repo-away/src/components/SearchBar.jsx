import {
  Input,
  IconButton,
  Flex,
  Select,
  Portal,
  Button,
  Group,
  Box,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { IoDice } from "react-icons/io5";
import { languages } from "../logic/languages";

export default function SearchBar() {
  return (
    <Flex direction="column" gap="5" pt="4" pb="4">
      <Group attached w="full">
        <Input
          pl="12px"
          flex="1"
          type="text"
          placeholder="Search repositories..."
          name="search"
          variant="outline"
          size="md"
          bg={{ _dark: "gray.800" }}
          color={{ base: "black", _dark: "whiteAlpha.900" }}
          _placeholder={{ color: { _dark: "gray.200" } }}
          css={{ "--focus-color": "colors.gray.300" }}
        />

        <IconButton
          aria-label="Search database"
          variant="surface"
          bg={{ base: "blue.600", _dark: "blue.500" }}
          color={{ base: "white", _dark: "black" }}
          size="md">
          <LuSearch />
        </IconButton>
      </Group>

      <Flex w="full" gap={4}>
        <Box flexGrow="4">
          <Select.Root
            collection={languages}
            fontSize="1rem"
            size="md"
            bg={{ base: "white", _dark: "gray.800" }}
            color={{ base: "black", _dark: "whiteAlpha.900" }}>
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Select language" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {languages.items.map((language) => (
                    <Select.Item
                      item={language}
                      key={language.value}
                      cursor="pointer">
                      {language.title}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>

        <Flex flexGrow="2" gap={4}>
          <Select.Root
            variant="outline"
            size="md"
            bg={{ base: "white", _dark: "gray.800" }}>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Filter by" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  <Select.Item item="Best Match">Best Match</Select.Item>
                  <Select.Item item="Most Stars">Most Stars</Select.Item>
                  <Select.Item item="Most Forks">Most Forks</Select.Item>
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>

          <Button
            bg={{ base: "red.600", _dark: "red.500" }}
            size="md"
            rounded="md">
            <IoDice /> Surprise me!
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
