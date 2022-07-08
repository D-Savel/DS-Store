import { useState } from "react"
import './App.css';
import { Route, Routes } from "react-router-dom"
import Header from './Components/Header';
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import Offer from "./pages/Offer"

function App() {

  const [select, setSelect] = useState("")

  return (
    <div className="App">
      <Header setSelect={setSelect} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Products" element={<Products select={select} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Offer" element={<Offer />} />
      </Routes>
    </div>
  );
}

export default App;
