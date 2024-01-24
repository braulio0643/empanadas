import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import {useEffect, useState } from 'react'
import Loader from './Loader'


const ItemListContainer = ({mensaje}) => {
    const [loadingEmpanadas, setLoadingEmpanadas] = useState(true)
    
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

    const [extras, setExtras] = useState([])
    const [loadingExtras, setLoadingExtras] = useState(true)
    useEffect(()=>{
        const db = getFirestore();
        const extrasCollection = collection(db,"Extras");
        getDocs(extrasCollection).then((querySnapshot)=>{
            const docsExtras = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }));
            setExtras(docsExtras);
            setLoadingExtras(false)
        })
    }, [])
    
    const productos = empanadas.concat(extras)
    console.log(productos) 
    
    const { id } = useParams()
    console.log(id)


    const getProductos = () => {
        if(productos.length>0){
            if (id == "empanadas"){
                return(empanadas)
            } else if (id == "extras"){
                return(extras)
            } else {
                return(productos)
            }
        }  
    } 

    if(loadingEmpanadas || loadingExtras){
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