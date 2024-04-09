import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Loading from "./components/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import Sections from "./components/sections/Sections";
import Timer from "./components/timer/Timer";

function App() {
  return (
    <div className="App container">
      <Loading />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
