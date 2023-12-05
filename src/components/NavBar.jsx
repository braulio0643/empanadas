import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <ul className='nav'>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                <CartWidget/>
            </ul>
        </div>
    )
}

export default NavBar