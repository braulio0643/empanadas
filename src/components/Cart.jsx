import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import CartItem from './CartItem'

const Cart = () => {

  const { cart, setCart, addItem, removeItem, clear, isInCart} = useContext(CartContext)
  console.log(cart)
  return (
    //cambiar classname
    <div className='inicio'>  
      {
        cart.map((p)=> {
          return(
              <div key={p.id}>
                  <CartItem
                      title= {p.title}
                      price = {p.price}
                      id= {p.id}
                      quantity = {p.quantity}
                  />
              </div>                        
          )
      })
      }
    </div>
  )
}

export default Cart