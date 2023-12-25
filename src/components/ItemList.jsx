import React from 'react'
import Item from './Item'

const ItemList = ({mensaje, productos}) => {
    console.log(productos)
    return (
        <div className='inicio'>
            {
                productos.map((p)=> {
                    return(
                        <div key={p.id}>
                            <Item
                                title= {p.title}
                                price = {p.price}
                                id= {p.id}
                            />
                        </div>                        
                    )
                })
            }
        </div>
    )
}

export default ItemList