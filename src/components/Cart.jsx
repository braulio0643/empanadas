import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import CartItem from './CartItem'
import {Button, Text} from '@chakra-ui/react'

const Cart = () => {

  const { cart, clear, precioTotal} = useContext(CartContext)
  console.log(cart)
  return (
    //cambiar classname
    <div className='flexColCenter'>  
      { 
        (cart.length>0)
        ? <div className='cartItems'>
          {cart.map((p)=> { 
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
        <Text>Precio total: ${precioTotal}</Text>
        <div className='cartButtons'>
          <Button onClick={()=>{clear()}} >Cancelar</Button>
          <Button onClick={()=>{clear()}} >Finalizar compra</Button>
        </div>
        
        </div> 

        :<Text>No hay productos en el carrito.</Text>

      }
      
    </div>
  )
}

export default Cart