import { useContext, useState } from "react";
import {
  Button,
} from "@chakra-ui/react";

import { CartContext } from '../context/ShoppingCartContext'


const ItemCount = ({title, price, id}) => {

    const { cart, setCart, addItem, removeItem, clear, isInCart} = useContext(CartContext)

    const [contador, setContador] = useState(0)

    const comprar= () => {
        alert(`Se agregaron ${contador} unidades al carrito`)
        //falta hacer que desaparezca el boton de compra
        const producto = {
            title: title,
            price: price,
            id: id,
            quantity: contador
        }
        addItem(producto)
        console.log(cart)
        // por qué me salen los nombres de cada cosa en vez de su valor directo?
    }

    const sumar = () => {
        if (contador < 20) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return(
        <div>
            <Button colorScheme='teal' size='xs' onClick= {restar}>
                -
            </Button>
            <Button onClick={comprar}>
                Agregar al carrito {contador} unidades
            </Button>
            <Button colorScheme='teal' size='xs' onClick={sumar}>
                +
            </Button>
        </div>
    )

}

export default ItemCount;