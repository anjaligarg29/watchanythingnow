import { Heading, Image, VStack,Text,HStack } from '@chakra-ui/react'
import React from 'react'

const MoviesList = ({id,Title,Poster,Year}) => {
  return (
    <VStack  w={"52"}
    shadow={"lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}>
     <Image src={Poster} w={"10"} h={"20"} objectFit={"contain"}/>
     <Heading size={"md"} noOfLines={3}>
        {Title}
     </Heading>
     <Text noOfLines={1}>
        {Year}
     </Text>
    </VStack>
  )
}

export default MoviesList