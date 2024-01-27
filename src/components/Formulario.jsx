import {useState, useContext} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { Input, Button, FormControl, FormLabel, Text } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import Swal from 'sweetalert2'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const {clear, cart, precioTotal} = useContext(CartContext)
    

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) => {
            Swal.fire({
                title:`Gracias por su compra!`,
                text: `Su código de seguimiento es ${id}`,
                icon: 'success'
            })
            clear()
        })  
    }

    const order = {
        cliente: {nombre, email},
        items: cart,
        precioTotal
    }

    const db = getFirestore()
    const ordersCollection = collection(db, "orden")

    
  return (
    <div className='formContainer'>
        {
            <FormControl className='flexColCenter'>
                <form action="" onSubmit={handleSubmit} className='form'>
                    <FormLabel>Nombre y apellido:</FormLabel>
                    <Input bg='white' type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    <FormLabel>Correo:</FormLabel>
                    <Input bg='white' type="email" placeholder='Correo' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <Button type='submit' colorScheme='orange'>Enviar</Button>
                </form>
            </FormControl> 
        }
          
    </div>
  )
}

export default Formulario