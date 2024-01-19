import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext'


const CartItem = ({title, price, id, quantity}) => {

    const { cart, setCart, addItem, removeItem, clear, isInCart} = useContext(CartContext)

    //falta agregar funcion de remove onclick
    return(
        <div>
            <Card>
                <CardHeader>
                    <Heading size ='md'>{title}</Heading>
                </CardHeader>
                <CardFooter>
                    <Text>${price}</Text>
                    <Text>${quantity} unidades</Text>
                </CardFooter>
                    <Button onClick={removeItem(id)}>
                        <Text>Eliminar (falta agregar funcion)</Text>
                    </Button>
            </Card>
        </div>
    )
}

export default CartItem