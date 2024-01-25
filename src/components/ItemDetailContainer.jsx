import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader'


const ItemDetailContainer = () => {
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

    const [bebidas, setBebidas] = useState([])
    const [loadingBebidas, setLoadingBebidas] = useState(true)
    useEffect(()=>{
        const db = getFirestore();
        const bebidasCollection = collection(db,"Bebidas");
        getDocs(bebidasCollection).then((querySnapshot)=>{
            const docsBebidas = querySnapshot.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }));
            setBebidas(docsBebidas);
            setLoadingBebidas(false)
        })
    }, [])

    const productos = (empanadas.concat(extras)).concat(bebidas)

    const { id } = useParams()
    const productId = productos.find((p)=>p.id== id)

    if(loadingEmpanadas || loadingExtras || loadingBebidas){
        return <div className='loader'> <Loader/></div> 
    }

    return (
        <div className='flexColCenter'>
            <ItemDetail
                title= {productId.title}
                description= {productId.description}
                price= {productId.price}
                id = {productId.id}
                img = {productId.img}
            />
        </div>
    )
}

export default ItemDetailContainer