import Navbar from "./components/Navbar";
import Heroimg from "./components/Heroimg";
import Carousel from "./components/Carousel";
import PicLists from "./components/PicLists";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Heroimg />
     <Carousel />
     <PicLists />
     <Partners />
     <Footer />
    
    </div>
  );
}

export default App;
