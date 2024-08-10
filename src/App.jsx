import AboutUs from "./components/AboutUs";
import { Container } from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="text-blueish font-open mx-auto">
      <Header />
      <AboutUs />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
