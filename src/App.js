import { useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navigation from './Component/Navigation';
import Home from './pages/Home'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Offer from './pages/Offers'

function App() {

  const [select, setSelect] = useState('all categories')

  return (
    <div className='App'>
      <Navigation setSelect={setSelect} />

      <Routes>
        <Route path='/' element={<Home setSelect={setSelect} />} />
        <Route path='/Home' element={<Home setSelect={setSelect} />} />
        <Route path='/Products' element={<Products select={select} />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Offer' element={<Offer />} />
      </Routes>
    </div>
  );
}

export default App;
