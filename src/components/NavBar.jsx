import React from 'react'
import CartWidget from './CartWidget'
import logo from '../multimedia/logo.png'
import { Link } from "react-router-dom"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

const NavBar = ({carro}) => {
    return (
        <div>
            <ul className='nav'>
                <Link to={"/"}>
                    <li><img className='logo' src={logo} alt="" /></li>
                </Link>

                <Link to={"/"}>
                    <li>Inicio</li>
                </Link>

                <li>
                    <Menu>
                        <MenuButton>
                            Categoría
                        </MenuButton>
                        <MenuList>
                            <Link to={"/category/empanadas"}>
                                <MenuItem>Empanadas</MenuItem>
                            </Link>
                            <Link to={"/category/extras"}>
                                <MenuItem>Extras</MenuItem>
                            </Link>
                            <Link to={"/category/bebidas"}>
                                <MenuItem>Bebidas</MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </li>
                
                <Link to={"/contact"}>
                    <li>Contacto</li>
                </Link>
                
                <Link to={"/cart"}>
                    <CartWidget
                    carro={carro}
                    />
                </Link>
                
            </ul>
        </div>
    )
}

export default NavBar