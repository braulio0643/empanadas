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
    Text
  } from '@chakra-ui/react'

const NavBar = ({carro}) => {
    return (
        <div>
            <ul className='nav'>
                <Link to={"/"}>
                    <li><img className='logo' src={logo} alt="" /></li>
                </Link>

                <Link to={"/"}>
                    <li><p>INICIO</p></li>
                </Link>

                <li>
                    <Menu>
                        <MenuButton>
                            <p>MENÚ</p>
                            
                        </MenuButton>
                        <MenuList>
                            <Link to={"/category/all"}>
                                <MenuItem><p>TODO</p></MenuItem>
                            </Link>
                            <Link to={"/category/empanadas"}>
                                <MenuItem> <p>EMPANADAS</p></MenuItem>
                            </Link>
                            <Link to={"/category/extras"}>
                                <MenuItem><p>EXTRAS</p></MenuItem>
                            </Link>
                            <Link to={"/category/bebidas"}>
                                <MenuItem><p>BEBIDAS</p></MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </li>
                
                <Link to={"/contact"}>
                    <li><p>CONTACTO</p></li>
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