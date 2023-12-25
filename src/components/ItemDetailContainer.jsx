import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    let productos = [
        { id: 0, category: "empanadas", title: "Empanada J&Q", description: "Contiene Jamón y Queso", price:"600"},
        { id: 1, category: "empanadas", title: "Empanada Carne", description: "Contiene Carne, Aceituna, Papa", price:"600"},
        { id: 2, category: "empanadas", title: "Empanada Pollo", description: "Contiene Pollo, Morrón, y Salsa especial", price:"600"},
        { id: 3, category: "empanadas", title: "Empanada C&Q", description: "Contiene Cebolla y Queso ", price:"600"},
        { id: 4, category: "pizzas", title: "Pizza Mozzarella", description: "Contiene queso Mozzarella, Tomate. Rinde para 8 porciones ", price:"4000"},
        { id: 5, category: "pizzas", title: "Pizza Ananá", description: "Contiene Jamón, Ananá. Rinde para 8 porciones ", price:"4000"},
        { id: 6, category: "pizzas", title: "Pizza Fugazzetta", description: "Contiene Cebolla, Queso. Rinde para 8 porciones ", price:"4000"},
        { id: 7, category: "pizzas", title: "Pizza J&Q", description: "Contiene Jamón, Queso, Morrón. Rinde para 8 porciones ", price:"4000"}
    ]

    const { id } = useParams()

    let productId= productos[id]

    return (
        <div>
            <ItemDetail
                title= {productId.title}
                description= {productId.description}
                price= {productId.price}
            />
        </div>
    )
}

export default ItemDetailContainer