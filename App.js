import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Part1 from "./components/Part1"
import Slideshow from "./components/Slideshow"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Slideshow />
     <Part1 />
     <Footer />
   
    </div>
  );
}

export default App;
