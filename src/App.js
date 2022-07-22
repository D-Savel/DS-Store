import { useState } from "react"
import './App.css';
import { Route, Routes } from "react-router-dom"
import Navigation from "./Components/Navigation";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Offer from "./pages/Offer"
import Cart from "./Components/Cart"

function App() {

  const [select, setSelect] = useState("start")

  return (
    <div className="App">
      <Navigation setSelect={setSelect} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products select={select} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
