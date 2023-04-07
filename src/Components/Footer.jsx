import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend } from "react-icons/ai"

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} minH={'40'} p="16" color={'white'} w={"full"}
        pos={"fixed"}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size="md" textTransform={'uppercase'} color={'white'}>
                        Subscribe To Get Updates
                    </Heading>
                    <HStack>
                        <Input placeholder='Enter Email Here...' />
                        <Button p="0" colorScheme={'purple'} variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={"20"} />
                        </Button>
                    </HStack>
                </VStack>

                <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                        MOVIES HUB
                    </Heading>

                    <Text textAlign={'center'} textTransform={'uppercase'}>
                        All Rights Reserved
                    </Text>


                </VStack>

                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                        Social Media
                    </Heading>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a href='https://youtube.com'>youtube</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a href='https://instagram.com/_anjali_xx29'>Instagram</a>
                    </Button>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <a href='https://linkdein.com/in/anjali_garg-26a96b214'>Linkdein</a>
                    </Button>
                </VStack>


            </Stack>
        </Box>
    )
}

export default Footer