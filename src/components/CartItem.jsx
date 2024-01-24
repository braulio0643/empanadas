import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartItem = ({title, price, id, quantity}) => {

    const { cart, setCart, addItem, removeItem, clear, isInCart} = useContext(CartContext)
    let titleFinal = title
    console.log(title)
    if(title.charAt(title.length-2)==","){
         titleFinal = title.slice(0,-2)
         console.log(titleFinal)
    } 
    //falta agregar funcion de remove onclick
    return(
        <div>
            <Card>
                <CardHeader>
                    <Heading size ='md'>{titleFinal}</Heading>
                </CardHeader>
                <CardFooter className='flexColCenter'>
                    <Text>${price}</Text>
                    <Text>{quantity} unidades</Text>
                </CardFooter>
                    <Button onClick={()=>{removeItem(title)}}>
                        Eliminar
                    </Button>
            </Card>
        </div>
    )
}

export default CartItem