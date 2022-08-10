import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Component/Navigation';
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Contact } from './pages/Contact'
import { Offers } from './pages/Offers'
import { Footer } from './Component/Footer'

const App = () => {

  const [select, setSelect] = useState('all categories')

  return (
    <>
      <Navigation setSelect={setSelect} />
      <Routes>
        <Route path='/' element={<Home setSelect={setSelect} />} />
        <Route path='/Home' element={<Home setSelect={setSelect} />} />
        <Route path='/Products' element={<Products select={select} />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Offer' element={<Offers select={select} setSelect={setSelect} />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App