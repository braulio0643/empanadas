import React from 'react'
import { createContext, useState , useEffect} from "react";

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {

    const [cart, setCart] = useState([])


    const addItem = (item) => {
       if(!isInCart(item.id)) {
          cart.push(item)
       }
    }

    const removeItem = (id) => {
      /*  for(let i = 0; i < cart.length; i++){
         if(cart[i].id==id){
            cart.splice(i, 1)
         }
      }  */
      setCart(cart.filter((p)=>p.id != id))
    }

    const clear = () => {

    }

    const isInCart = (id) => {
      for(let i = 0; i < cart.length; i++){
         if(cart[i].id == id){
            return(true)
         }
      }
      return false
    }

    return (
      <CartContext.Provider value = {{cart, setCart, addItem, removeItem, clear, isInCart}}>
         {children}
      </CartContext.Provider>
    )
}

export default ShoppingCartProvider