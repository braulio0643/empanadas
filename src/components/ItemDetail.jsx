import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({title, description, price, id}) => {


    return(
        <div className='flexColCenter'>
            <Card>
                <CardHeader>
                    <Heading size ='md'>{title}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                </CardBody>
                <CardFooter>
                    <Text>${price}</Text>
                </CardFooter>
                <ItemCount title= {title} price = {price} id= {id}/>
            </Card>
        </div>
    )
}

export default ItemDetail