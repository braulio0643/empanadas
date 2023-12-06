import React from 'react'
import carrito from '../multimedia/carrito.png'

const CartWidget = ({carro}) => {
    return (
        <div className='carrito'>
            <img src={carrito} alt="" />
            <p>{carro}</p>
        </div>
    )
}

export default CartWidget