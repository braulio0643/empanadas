import React from 'react'
import { Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <div>
        <Spinner
            thickness="8px"
            speed='0.65s'
            emptyColor='gray.200'
            color='brown.500'
            size='xl'
        />
    </div>
  )
}

export default Loader