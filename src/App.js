import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ParentsViews from "./components/ParentsViews";
import Structure from "./components/Structure";
import Topper from "./components/Topper";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Structure/>
      <Topper/>
      <ParentsViews/>
      <Footer/>
    </div>
  );
}

export default App;
