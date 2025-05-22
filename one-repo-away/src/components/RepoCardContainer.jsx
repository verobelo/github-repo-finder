import { Container } from "@chakra-ui/react";
import RepoCard from "./RepoCard";

export default function RepoCardContainer() {
  return (
    <Container>
      <RepoCard />
      <RepoCard />
      <RepoCard />
      <RepoCard />
    </Container>
  );
}
