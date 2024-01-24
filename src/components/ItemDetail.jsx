import {useState, useContext} from 'react'
import {Card,Input, CardHeader, Heading, CardBody, Text, CardFooter, Button, CheckboxGroup, Checkbox, Stack, useCheckboxGroup} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/ShoppingCartContext'

const ItemDetail = ({title, description, price, id}) => {
    const carnes= ["Carne de res", "Pollo", "Bondiola", "Atún", "Vacío", "Chorizo", "Jamón", "Panceta"]
    const quesos= ["Queso cremoso", "Queso cheddar", "Provoleta", "Roquefort"]
    const verduras= ["Cebolla", "Ajo", "Papa", "Pepino", "Morrón", "Zapallo", "Zanahoria", "Espinaca", "Choclo", "Batata"]
    const agregados= ["Salsa picante", "Salsa agridulce", "Sal", "Pimienta"]

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
            <Card>
                <CardHeader>
                    <Heading size ='md'>{esEmpanadaNormal? title : empanadaCustom}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                </CardBody>
                <CardFooter>
                    <Text>${priceCustom}</Text>
                </CardFooter>
                {isInCart(id) || <ItemCount title= {titleCustom} price = {priceCustom} id= {id}/>
                }
            </Card>
            {
                esEmpanadaNormal ||
                <div>
                    <Text>Carnes:</Text>
                    <Stack direction='row' spacing='10px'>
                    {
                        carnes.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 900 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                    <Text>Quesos:</Text>
                    <Stack direction='row' spacing='10px'>
                    {
                        quesos.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 900 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                    <Text>Verduras:</Text>
                    <Stack direction='row' spacing='10px'>
                    {
                        verduras.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 900 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                    <Text>Agregados:</Text>
                    <Stack direction='row' spacing='10px'>
                    {
                        agregados.map((p)=> {
                            return(
                                <Checkbox value={p} onChange={()=>handleCheckbox(p)}
                                isDisabled={priceCustom == 900 && !empanadaCustom.includes(p + ",")}>{p}</Checkbox>
                            )
                        })
                    }
                    </Stack>
                </div>

                
            }
        </div>
    )
}

/* <CheckboxGroup value={carnesElegidas}>
                    <Stack>
                        <Text>Seleccione las carnes que quiera ${carnesElegidas}</Text>
                        {
                            carnes.map((p)=>{
                                return(
                                <Checkbox value={p}>{p}</Checkbox>
                                )
                            })
                        }
                    </Stack>
                </CheckboxGroup> */

export default ItemDetail