import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "../src/Pages/index";
import Footer from "./Components/Footer";
import Recipes from "./Pages/Recipes";

function App() {
  return (
    <div className="bg-Gray">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
