import React from 'react'
import {Card, CardHeader, Heading, CardBody, Text, CardFooter, Button} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({title, price, id}) => {
    const buttonId= "/item/" + id
    return(
        <div className='item'>
            <Card  className='flexColCenter'>
                <CardHeader>
                    <Heading size ='md'>{title}</Heading>
                </CardHeader>
                <CardFooter>
                    <Text>${price}</Text>
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