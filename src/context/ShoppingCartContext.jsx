import React from 'react'
import { createContext, useState , useEffect} from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [cartCounter, setCartCounter] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)


    const addItem = (item) => {
       if((!isInCart(item.id)) &&
       item.quantity > 0 ) {
          cart.push(item)
          setCartCounter(cartCounter + 1)
          setPrecioTotal(precioTotal+ item.price* item.quantity)
          alert(`Se agregaron ${item.quantity} unidades al carrito`)
       }
    }

    const removeItem = (title) => {
      for(let i = 0; i < cart.length; i++){
         if(cart[i].title==title){setPrecioTotal(precioTotal - cart[i].price*cart[i].quantity)}
      }
      setCart(cart.filter((p)=>p.title != title))
      setCartCounter(cartCounter-1)
    }

    const clear = () => {
      setCart([])
      setCartCounter(0)
      setPrecioTotal(0)
    }

    const isInCart = (id) => {
      if(id == "uxBRJRRAI0ccU2ieFOvz"){ return false }
      for(let i = 0; i < cart.length; i++){
         if(cart[i].id == id){
            return(true)
         }
      }
      return false
    }

    return (
      <CartContext.Provider value = {{cart, setCart, cartCounter, setCartCounter, precioTotal, setPrecioTotal, addItem, removeItem, clear, isInCart}}>
         {children}
      </CartContext.Provider>
    )
}

export default ShoppingCartProvider