import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <SearchBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
