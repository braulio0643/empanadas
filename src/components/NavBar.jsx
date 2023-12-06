import React from 'react'
import CartWidget from './CartWidget'
import logo from '../multimedia/logo.png'

const NavBar = ({carro}) => {
    return (
        <div>
            <ul className='nav'>
                <li><img className='logo' src={logo} alt="" /></li>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
                <CartWidget
                carro={carro}
                />
            </ul>
        </div>
    )
}

export default NavBar