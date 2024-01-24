import { useContext, useState } from "react";
import {
  Button,
} from "@chakra-ui/react";

import { CartContext } from '../context/ShoppingCartContext'


const ItemCount = ({title, price, id}) => {

    const {addItem} = useContext(CartContext)

    const [contador, setContador] = useState(0)

    const comprar= () => {
        //falta hacer que desaparezca el boton de compra
        //falta sweet alert
        const producto = {
            title: title,
            price: price,
            id: id,
            quantity: contador
        }
        addItem(producto)
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