import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Container
      maxW="2xl"
      w="900px"
      m="0 auto"
      centerContent
      display="grid"
      minH="100dvh"
      gridTemplateRows="auto 1fr auto">
      <Header />
      <main>
        <SearchBar />
      </main>
      <Footer />
    </Container>
  );
}

export default App;
