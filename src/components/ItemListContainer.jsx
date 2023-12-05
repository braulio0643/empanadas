import React from 'react'
import ItemList from './ItemList'
import NavBar from './NavBar'

const ItemListContainer = ({mensaje}) => {
    return (
        <div>
            <ItemList
            mensaje={mensaje}
            />
        </div>
    )
}

export default ItemListContainer