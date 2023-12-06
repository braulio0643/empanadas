import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar'


const App = () => {
  const carro = 1
  const mensaje= "Las mejores empanadas de Argentina!"
  return (
      <div>
        <NavBar
          carro={carro}
        />
        <ItemListContainer
          mensaje={mensaje}
        />
      </div>
  )
}

export default App
