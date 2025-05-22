import {
  Input,
  IconButton,
  Flex,
  Select,
  Portal,
  Button,
  Group,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { languages } from "../logic/languages";

export default function SearchBar() {
  return (
    <Flex direction="column" gap="5" pt="4" pb="4">
      <Group attached w="full">
        <Input
          flex="1"
          type="text"
          placeholder="Search repositories..."
          _placeholder={{ fontSize: "16px" }}
          name="search"
          variant="flushed"
          size="md"
          bg="white"
          css={{ "--focus-color": "colors.blue.600" }}
        />

        <IconButton
          aria-label="Search database"
          variant="surface"
          backgroundColor="blue.600"
          color="white"
          size="md">
          <LuSearch />
        </IconButton>
      </Group>

      <Flex w="full" gap={4}>
        <Box flexGrow="3">
          <Select.Root
            collection={languages}
            fontSize="1rem"
            size="md"
            bg="white">
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
                    <Select.Item item={language} key={language.value}>
                      {language.title}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Box>

        <Flex flexGrow="2" gap={3}>
          <Select.Root variant="outline" size="md" bg="white">
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

          <Button colorPalette="red" size="md" rounded="md">
            Surprise me!
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
