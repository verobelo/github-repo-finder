import { Grid, Pagination, ButtonGroup, IconButton } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import RepoCard from "./RepoCard";

export default function RepoCardContainer() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} justifyItems="center">
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </Grid>

      <Pagination.Root
        count={20}
        pageSize={2}
        defaultPage={1}
        ml="auto"
        mr="auto">
        <ButtonGroup variant="ghost" size="sm">
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </>
  );
}
