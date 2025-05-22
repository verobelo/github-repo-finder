import { Box, Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RepoCardContainer from "./components/RepoCardContainer";

function App() {
  return (
    <Container
      maxW="2xl"
      w="900px"
      display="grid"
      minH="100dvh"
      gridTemplateRows="auto 1fr auto"
      gap={4}>
      <Header />
      <Box as="main" display="grid" gridTemplateRows="auto 1fr" gap={6}>
        <SearchBar />
        <RepoCardContainer />
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
