import {useState, useContext} from 'react'
import {collection, addDoc, getFirestore} from "firebase/firestore"
import { Input, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import Swal from 'sweetalert2'

const FormularioContacto = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(mensajesCollection, order).then(({ id }) => {
            Swal.fire({
                title:`Gracias por su mensaje!`,
                text: `Su código de seguimiento es ${id}`,
                icon: 'success'
            })
            setNombre("")
            setMensaje("")
            setEmail("") 
        }) 
        
    }

    const order = {
        nombre, 
        email,
        mensaje
    }

    const db = getFirestore()
    const mensajesCollection = collection(db, "mensaje")

    
  return (
    <div className='formContainer'>
        {
            <FormControl className='flexColCenter'>
                <form action="" onSubmit={handleSubmit} className='form'>
                    <FormLabel>Nombre y apellido:</FormLabel>
                    <Input type="text" placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} value={nombre}/>

                    <FormLabel>Correo:</FormLabel>
                    <Input type="email" placeholder='Correo' onChange={(e) => setEmail(e.target.value)} value={email}/>

                    <FormLabel>Mensaje:</FormLabel>
                    <Textarea placeholder='mensaje' onChange={(e)=> setMensaje(e.target.value)} value={mensaje}/>

                    <Button type='submit' colorScheme='blue'>Enviar</Button>
                </form>
            </FormControl> 
        }
          
    </div>
  )
}

export default FormularioContacto