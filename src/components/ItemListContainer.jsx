import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import {useEffect, useState } from 'react'
import Loader from './Loader'


const ItemListContainer = ({mensaje}) => {
    const [loadingEmpanadas, setLoadingEmpanadas] = useState(true)
    const [loadingPizzas, setLoadingPizzas] = useState(true)
    const [empanadas, setEmpanadas] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const empanadasCollection = collection(db,"Empanadas");
        getDocs(empanadasCollection).then((querySnapshot)=>{
            const docsEmpanadas = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }));
            setEmpanadas(docsEmpanadas);
            setLoadingEmpanadas(false)
        })

    }, [])
    const [pizzas, setPizzas] = useState([])
    useEffect(()=>{
        const db = getFirestore();
        const pizzasCollection = collection(db,"Pizzas");
        getDocs(pizzasCollection).then((querySnapshot)=>{
            const docsPizzas = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }));
            setPizzas(docsPizzas);
            setLoadingPizzas(false)
        })
    }, [])
    
    const productos = empanadas.concat(pizzas)
    console.log(productos)
    
    const { id } = useParams()
    console.log(id)


    const getProductos = () => {
        if(productos.length>0){
            if (id == "empanadas"){
                return(empanadas)
            } else if (id == "pizzas"){
                return(pizzas)
            } else {
                return(productos)
            }
        }  
    } 

    if(loadingEmpanadas || loadingPizzas){
        return <div className='flexColCenter'> <Loader/></div> 
        
    }

    return (
        <div>
            <ItemList
                mensaje={mensaje}
                productos={getProductos()}
            />
        </div>
    )
}

export default ItemListContainer