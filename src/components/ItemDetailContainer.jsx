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

    const productos = empanadas.concat(extras)

    const { id } = useParams()
    const productId = productos.find((p)=>p.id== id)

    if(loadingEmpanadas || loadingExtras){
        return <div className='flexColCenter'> <Loader/></div> 
    }

    return (
        <div>
            <ItemDetail
                title= {productId.title}
                description= {productId.description}
                price= {productId.price}
                id = {productId.id}
            />
        </div>
    )
}

export default ItemDetailContainer