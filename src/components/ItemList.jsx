import React from 'react'
import Item from './Item'

const ItemList = ({mensaje, productos}) => {
    console.log(productos)
    return (
        <div  className='flexWrap'>
            {
                productos.map((p)=> {
                    return(
                        <div key={p.id}>
                            <Item
                                title= {p.title}
                                price = {p.price}
                                id= {p.id}
                                img = {p.img}
                            />
                        </div>                        
                    )
                })
            }
        </div>
    )
}

export default ItemList