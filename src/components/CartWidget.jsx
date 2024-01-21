import {useContext} from 'react'
import carrito from '../multimedia/carrito.png'
import { CartContext } from '../context/ShoppingCartContext'

const CartWidget = () => {
    const {cartCounter} = useContext(CartContext)
    return (
        <div className='carrito'>
            <img src={carrito} alt="" />
            <p>{cartCounter}</p>
        </div>
    )
}

export default CartWidget