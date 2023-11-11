import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Interests from "./components/Interests";

function App() {
  return (
    <div className="main--container">
      <div className="inside--main--container">
        <Header />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
