import { Box, Button, HStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    const [text, setText] = useState("");

    const changeText = (e) => {
        console.log(e);
        setText(e.target.value);
    }

    return (

        <>
            <Box w={['500px', "full"]}>

                <HStack overflowX={"auto"} h={"100px"} bgColor={"blackAlpha.900"} color={"white"}
                    gap={"20px"} fontFamily={"sans-serif"} fontSize={"20px"}
                    textTransform={"uppercase"}  >
                    <Link to={"/"} m={"10px"} w={"70%"} fontFamily={'Roboto'}>Home</Link>
                    <Link to={"/movies"} w={"70%"}fontFamily={'Roboto'}>Movies</Link>


                    <Input placeholder='Search Movie' w={["150px", " 300px"]} h={"30px"}
                        fontFamily={'Roboto'} value={text} onChange={changeText}
                    />

                <Link to={`/movies/${text}`} bgColor={"purple"} left={"30%"}>Search</Link>
                   

                </HStack>
            </Box>

        </>
    )
}


export default Header;
