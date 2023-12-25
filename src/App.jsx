import React from 'react'
import ItemListContainer from './components/ItemListContainer' 
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contact from './components/Contact'
import Cart from './components/Cart'
import './App.css'
import NavBar from './components/NavBar'
import {  } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'



const App = () => {
  const carro = 1
  const mensaje= "Las mejores empanadas de Argentina!"
  return (
    <BrowserRouter>
          <NavBar
            carro={carro}
          />
          <Routes>
            <Route exact path='/' element={<ItemListContainer/>} />
            <Route exact path='/category/:id' element={<ItemListContainer/>} />
            <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/cart' element={<Cart/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
