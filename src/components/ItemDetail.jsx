import {useState, useContext} from 'react'
import {Card,Input, CardHeader, Heading, CardBody, Text, CardFooter, Button, CheckboxGroup, Checkbox, Stack, useCheckboxGroup} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartContext'

const ItemDetail = ({title, description, price, id, img}) => {
    const carnes= ["Carne de res", "Pollo", "Bondiola", "Atún", "Vacío", "Chorizo", "Jamón", "Panceta"]
    const quesos= ["Queso cremoso", "Queso cheddar", "Provoleta", "Roquefort", "Mozarella"]
    const verduras= ["Cebolla", "Ajo", "Papa", "Pepino", "Morrón", "Zapallo", "Zanahoria", "Espinaca", "Choclo", "Batata"]

    const {isInCart} = useContext(CartContext)
    const [empanadaCustom, setEmpanadaCustom] = useState("Empanada de ")
    const [priceCustom, setPrice] = useState(price)
    const [titleCustom, setTitle] = useState(title)
    const esEmpanadaNormal = (id!= "uxBRJRRAI0ccU2ieFOvz")

    const handleCheckbox = (value) => {
        const estaIncluido = empanadaCustom.includes(value + ",")
        if(estaIncluido){
            setTitle(empanadaCustom.replace(value + ",", ""))
            setEmpanadaCustom(empanadaCustom.replace(value + ",", ""))
            setPrice(priceCustom - 100)
        } else {
            setTitle(empanadaCustom + value + ", ")
            setEmpanadaCustom(empanadaCustom + value + ", ")
            setPrice(priceCustom + 100)
            title = empanadaCustom
        }
        console.log(empanadaCustom)
    }

    return(
        <div className='flexColCenter'>
            <Card  className='itemDetail'>
                <CardHeader>
                    <Heading size ='lg'>
                        {esEmpanadaNormal? title : empanadaCustom}
                    
                    </Heading>
                </CardHeader>
                <CardBody>
                    <img src={img} alt="" />
                    <Text fontSize='2xl' className='description'>{description}</Text>
                </CardBody>
                <CardFooter>
                    <Text fontSize='xl'>${priceCustom}</Text>
                </CardFooter>
                {isInCart(id) || <ItemCount title= {titleCustom} price = {priceCustom} id= {id} img={img}/>}
            </Card>
            {
                esEmpanadaNormal ||
                <div className='ingredientesContainer'>
                    <Text>Carnes:</Text>
                    <Stack direction='row' spacing='10px' className='ingredientes'>
                    {
                        carnes.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 1000 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                    <Text>Quesos:</Text>
                    <Stack direction='row' spacing='10px' className='ingredientes'>
                    {
                        quesos.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 1000 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                    <Text>Verduras:</Text>
                    <Stack direction='row' spacing='10px' className='ingredientes'>
                    {
                        verduras.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 1000 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                </div>

                
            }
        </div>
    )
}

export default ItemDetail