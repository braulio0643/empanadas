import React from 'react'
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import NavBar from './components/NavBar'

const App = () => {

  const mensaje= "Bienvenido a la mejor empanadería de Argentina!"
  return (
      <div>
        <NavBar/>
        <ItemListContainer
          mensaje={mensaje}
        />
      </div>
  )
}

export default App
