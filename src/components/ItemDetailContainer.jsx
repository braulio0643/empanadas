import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader'


const ItemDetailContainer = () => {
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

    const { id } = useParams()
    const productId = productos.find((p)=>p.id== id)

    if(loadingEmpanadas || loadingPizzas){
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