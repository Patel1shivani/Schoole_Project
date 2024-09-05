import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParentsViews from "./components/ParentsViews";
import Structure from "./components/Structure";
import Topper from "./components/Topper";
import Cate from "./components/cate";
import Msg from "./components/message"
// import Plan from "./components/plan"
import School from "./components/School"


function App() {
  return (
    <div>
      <Navbar/>
      {/* <Hero/> */}
      <Banner/>
      <Structure/>
      <School/>
      <Topper/>
      <Cate/>
      {/* <Plan/> */}
      <ParentsViews/>
      <Msg/>
      <Footer/>
    </div>
  );
}

export default App;
