import {Link} from 'react-router-dom'
import {Heading, Text, Button, Card, CardBody, CardHeader, CardFooter} from '@chakra-ui/react'

const Home = () => {
  return (
    <div className='flexColCenter'>
        <div className='homeIntro'>
            <Heading fontSize='4xl'>Bienvenido a EmpanadaCraft!</Heading>
            <Text fontSize='2xl'>
                En EmpanadaCraft te damos la oportunidad de pedir tus propias empanadas personalizadas, con los ingredientes que quieras. 
                Por otro lado, también tenes la opción de pedir empanadas clásicas sin tener que personalizar nada!
            </Text>
        </div>
        
        <div className='flexWrap'>
            <Card className='cardsHome'>
                <CardHeader className='header'>
                    <Heading>Empanada PERSONALIZADA</Heading>
                </CardHeader>
                <CardBody>
                    <img src="https://i.imgur.com/kbR2XL2.jpeg" alt="" />
                    <Text className='description' fontSize='2xl'>Creá tu propia empanada personalizada</Text>
                </CardBody>
                <CardFooter>
                <Link to={"item/uxBRJRRAI0ccU2ieFOvz"}>
                    <Button colorScheme='orange'>
                        <Text fontSize='xl' color='black'>Ver detalles</Text>
                    </Button>
                </Link>
                </CardFooter>
            </Card>

            <Card className='cardsHome'>
                <CardHeader className='header'>
                    <Heading>Menú clásico</Heading>
                </CardHeader>
                <CardBody>
                    <img src="https://i.imgur.com/r6C3qe1.png" alt="" />
                    <Text className='description' fontSize='2xl'>Empanadas clásicas (carne, pollo, etc.), bebidas, salsas...</Text>
                </CardBody>
                <CardFooter>
                <Link to={"/category/all"}>
                    <Button colorScheme='orange'>
                        <Text fontSize='xl' color='black'>Ver detalles</Text>
                    </Button>
                </Link>
                </CardFooter>
            </Card>

        </div>
    </div>
  )
}

export default Home