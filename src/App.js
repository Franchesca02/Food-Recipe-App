import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "../src/Pages/index";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import ResponsiveNav from "./Components/Layout/ResponsiveNav";
import Nutrients from "./Components/All-menus/Nutrients";
import Pastries from "./Components/All-menus/Pastries";
import Veggies from "./Components/All-menus/Veggies";
import Deserts from "./Components/All-menus/Deserts";

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
          <Route path="/nutrients" element={<Nutrients />} />
          <Route path="/pastries" element={<Pastries />} />
          <Route path="/veggies" element={<Veggies />} />
          <Route path="/deserts" element={<Deserts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
