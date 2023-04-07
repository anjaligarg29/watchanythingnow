import { Badge, Box, Container, Stack, VStack } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'
import { HStack } from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import { Text,Heading, Image} from '@chakra-ui/react';
import Loader from './Loader';
import axios from 'axios';

const MovieDetails = () => {

    const params= useParams();

    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const FetchMovie =async ()=> {

        const {data}=await  axios.get(`https://www.omdbapi.com/?i=${params.id}&apikey=d4571194`)
        setMovie(data);
        setLoading(false)
     
      }
      setLoading(true);
      FetchMovie();
      },[params.id]);

  return (
    <>
    <Container maxW={"container.xl"} h={"80vh"} gap={"20px"}>

      <VStack maxW={"full"} h={"full"}>
            {
              loading ? (
                <Loader />
              ) : 
           
            
              <VStack w={"full"} h={"full"} textAlign={"center"} justifyContent={"center"}
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
                <Image src={movie.Poster} w={"50vh"} h={"50vh"} />
                 <Heading size={"md"} noOfLines={3}>
                    {movie.Title}
                 </Heading>
                 <Text noOfLines={1}>
                    {movie.Year}
                 </Text>
            
                 <Text noOfLines={1}>
                    {movie.Genre}
                 </Text>
            
                 <Text noOfLines={1}>
                    {movie.Released}
                 </Text>
            
                 <Badge bgColor={"black"} color={"white"}>
                  {movie.Rating}
                 </Badge>
            
                 <Text noOfLines={1}>
                    {movie.Timing}
                 </Text>
            
                 <Text noOfLines={1}>
                    {movie.About}
                 </Text>
            
              </VStack>
    
            
            }
          </VStack>
    </Container>
    </>
  )
}

export default MovieDetails