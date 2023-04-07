import { Box, Container, Heading, Image, Text,Stack } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/5.png';
import img2 from '../assests/2.png';
import img3 from '../assests/3.png';
import img4 from '../assests/4.png';
import img5 from '../assests/1.png';
import img6 from '../assests/6.png';
import img7 from '../assests/7.png';



const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={"container.xl"} p={"1rem"} m={"2rem"}>
                <Heading w={"fit-content"} m={"auto"} fontFamily={'Roboto'}
                    textTransform={"uppercase"} borderBottom={"3px solid purple"}>
                    THE MOVIES HUB
                </Heading>

                <Stack direction={["column","row"]} h={"full"}  alignItems={'center'}>
                    <Image src={img5}   w={"250px"} h={['40', '300']} borderRadius={"full"} />
                    <Image src={img6} w={"250px"} h={['40', '300']} borderRadius={"full"} />
                    <Image src={img7}   w={"250px"} h={['40', '300']} borderRadius={"full"} />


                    <Text w={['100','400']} fontFamily={'Roboto'} letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'center'}>
                        It is an application where users can search for movies by entering
                        the title of the movie.Get up and running with a basic search movie engine
                        allowing us to look for movies based on a topic in our MongoDB Atlas movie
                        data. Make it even easier for our users by building more advanced search queries
                        with fuzzy matching and wildcard paths to forgive them for fat fingers and
                        misspellings.
                    </Text>

                </Stack>

            </Container>
        </Box>
    )
}

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
    //    showArrows={false}
    borderBottom={"10px solid black"}
    >
        <Box w="full" >
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />

        </Box>
        <Box w="full">
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />

        </Box>

        <Box w="full">
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />

        </Box>

        <Box w="full">
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />

        </Box>

    </Carousel>
);

export default Home