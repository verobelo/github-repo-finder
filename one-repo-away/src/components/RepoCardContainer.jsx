import { Grid } from "@chakra-ui/react";
import RepoCard from "./RepoCard";

export default function RepoCardContainer() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </Grid>
  );
}
