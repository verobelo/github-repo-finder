import { Container } from "@chakra-ui/react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <Container maxW="xl" m="0 auto" centerContent>
      <Header />
      <main>{/*<SearchBar />*/}</main>
      <Footer />
    </Container>
  );
}

export default App;
