import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartItem = ({title, price, id, quantity, img}) => {

    const { cart, setCart, addItem, removeItem, clear, isInCart} = useContext(CartContext)
    let titleFinal = title
    console.log(title)
    if(title.charAt(title.length-2)==","){
         titleFinal = title.slice(0,-2)
         console.log(titleFinal)
    } 
    console.log(img)
    //falta agregar funcion de remove onclick
    return(
        <div>
            <Card className='cartItem'>
                <div className='cartItemTop'>
                    <img src={img}/>
                    <div className='cartItemInfo'>
                        <Heading size='md'>{title}</Heading>
                        <Text fontSize='xl'>{quantity} unidades - ${price*quantity}</Text>
                    </div>
                </div>
                <Button onClick={()=>{removeItem(title)}} className='cartItemButton'>
                        Eliminar
                </Button>
            </Card>
        </div>
    )
}

export default CartItem