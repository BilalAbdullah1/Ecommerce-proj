import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Placeholders from './pages/Placeholders'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Collection' element={<Collection />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Placeholders' element={<Placeholders />} />
        <Route path='/Product' element={<Product />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
