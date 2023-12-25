import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'

const ItemDetail = ({title, description, price}) => {
    return(
        <div className='inicio'>
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
                <Button>
                    <Text>Agregar al carrito</Text>
                </Button>
            </Card>
        </div>
    )
}

export default ItemDetail