import { Button, Container, HStack, Input, textDecoration } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MoviesList from './MoviesList'
import Loader from './Loader'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MovieDetails from './MovieDetails'

const Movies = () => {

  const params=useParams();

  const [movies,setMovies] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const FetchMovie = ()=> {
      console.log(params.name);
    
      if(!params.name){

       axios.get(`http://www.omdbapi.com/?s=kabhi&apikey=d4571194`)
      .then((response)=>{
        setMovies(response.data.Search);
        setLoading(false);
      })
    }
    else{
      axios.get(`http://www.omdbapi.com/?s=${params.name}&apikey=d4571194`)
      .then((response)=>{
        setMovies(response.data.Search);
        setLoading(false);
      })
    }
  }
  setMovies([])
  setLoading(true);
  FetchMovie();
  },[params.name] );

  return (
    <>
    <Container maxW={"container.xl"} h={"80vh"} gap={"20px"}  overflowY={"auto"} >

      <HStack wrap={"wrap"} justifyContent={"space-evenly"} gap={"10px"}
      alignItems={"center"} w={"full"} >
            {
              loading ? (
                <Loader />
              ) : 
            movies.map((i) => (
              <Link to={`/movie/${i.imdbID}`}>
              <MoviesList
               id= {i.imdbID}
                Title={i.Title}
                Poster={i.Poster}
                Year={i.Year}/>
                </Link>
            ))}
          </HStack>
    </Container>

    </>
  )
}

export default Movies