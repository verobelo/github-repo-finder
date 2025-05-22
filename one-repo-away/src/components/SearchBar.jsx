import { Box, Group, Input, IconButton } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import { LuSearch } from "react-icons/lu";

export default function SearchBar() {
  return (
    <Box>
      <Group w="full">
        <Input
          type="text"
          placeholder="Search repositories..."
          _placeholder={{ fontSize: "16px" }}
          name="search"
          variant="flushed"
          size="md"
          css={{ "--focus-color": "colors.blue.600" }}
        />

        <IconButton
          aria-label="Search database"
          variant="surface"
          backgroundColor="blue.600"
          color="white">
          <LuSearch />
        </IconButton>
      </Group>

      <div className="search-bar__filters">
        <Dropdown>
          <label htmlFor="language">
            <select id="language" name="language" defaultValue="option1">
              <option value="option1">Language</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
        </Dropdown>
        <Dropdown>
          <label htmlFor="sortby">
            <select id="sortby" name="sortby" defaultValue="option1">
              <option value="option1">Best Match</option>
              <option value="option2">Most Stars</option>
              <option value="option3">Most Forks</option>
            </select>
          </label>
        </Dropdown>

        <button className="search-bar__random-btn">Surprise Me!</button>
      </div>
    </Box>
  );
}
