import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigation } from './Component/Navigation';
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import { Contact } from './pages/Contact'
import { Offers } from './pages/Offers'
import { Footer } from './Component/Footer'

const App = () => {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Offer' element={<Offers />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App