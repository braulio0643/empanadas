import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({title, price, id, img}) => {
    const buttonId= "/item/" + id
    return(
        <div>
            <Card  className='shopItem'>
                <CardHeader>
                    <Heading size ='lg'>{title}</Heading>
                </CardHeader>
                <CardBody>
                    <img src={img} alt="" />
                </CardBody>
                <CardFooter>
                    <Text fontSize='2xl'>${price}</Text>
                </CardFooter>
                <Link to={buttonId}>
                    <Button>
                        <Text>Ver detalles</Text>
                    </Button>
                </Link>
                
            </Card>
        </div>
    )
}

export default Item