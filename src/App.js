import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "../src/Pages/index";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import ResponsiveNav from "./Components/Layout/ResponsiveNav";

function App() {
  return (
    <div className="bg-Gray">
      <BrowserRouter>
        <Navbar />
        <ResponsiveNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#about" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
