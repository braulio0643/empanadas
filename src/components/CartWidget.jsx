import {useContext} from 'react'
import carrito from '../multimedia/carrito.png'
import { CartContext } from '../context/ShoppingCartContext'
import { Text } from '@chakra-ui/react'

const CartWidget = () => {
    const {cartCounter} = useContext(CartContext)
    return (
        <div className='carrito'>
            <img src={carrito} alt="" />
            <Text fontSize='2xl'>{cartCounter}</Text>
        </div>
    )
}

export default CartWidget