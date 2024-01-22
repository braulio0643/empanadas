import {useState} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { Input, Button, FormControl, FormLabel, Text } from '@chakra-ui/react'

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)
    const [compraFinalizada, setCompra] = useState(false)

    

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id))
        setCompra(true)
    }

    const order = {
        nombre, 
        email
    }

    const db = getFirestore()
    const ordersCollection = collection(db, "orden")

    
  return (
    <div>
        {
            compraFinalizada 
             
            ? <Text>Gracias por su compra! Su número de orden es ${orderId}</Text>
            
            :<FormControl>
                <form action="" onSubmit={handleSubmit}>
                    <FormLabel>Nombre:</FormLabel>
                    <Input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    <FormLabel>Correo:</FormLabel>
                    <Input type="email" placeholder='Correo' onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <Button type='submit' colorScheme='blue'>Enviar</Button>
                </form>
            </FormControl> 
        }
          
    </div>
  )
}

export default Formulario