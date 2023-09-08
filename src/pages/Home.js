import React from 'react';
import { Flex, Text, Box, Card, Heading } from 'rebass';

const HomePage =()=> {
    return (
        <>  
            <Card
                p={4}
                py={7}
                backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                backgroundSize='cover'
                borderRadius={8}
                color='white'
                bg='darkgray'
                >
                <Heading
                textAlign='center'
                fontSize={[ 5, 6 ]}>
                Homepage backgroundImage
                </Heading>
            </Card>
            <Flex>
                <Box width={1/3}>
                    <a href='/about' style={{ textDecoration: 'none' }}>
                        <Card
                            p={2}
                            py={6}
                            backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                            backgroundSize='cover'
                            borderRadius={8}
                            color='white'
                            bg='black'
                        >
                            <Text color='white' >About Me</Text>
                        </Card>
                    </a>
                </Box>
                <Box width={1/3}>
                    <a href='/portfolio' style={{ textDecoration: 'none' }}>
                        <Card
                            p={2}
                            py={6}
                            backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                            backgroundSize='cover'
                            borderRadius={8}
                            color='white'
                            bg='grey'
                        >
                            <Text color='white' >Portfolio</Text>
                        </Card>
                    </a>
                </Box>
                <Box width={1/3}>
                    <a href='/contact' style={{ textDecoration: 'none' }}>
                        <Card
                            p={2}
                            py={6}
                            backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                            backgroundSize='cover'
                            borderRadius={8}
                            color='white'
                            bg='white'
                        >
                            <Text color='black' >Contact</Text>
                        </Card>
                    </a>
                </Box>
            </Flex>
        </>
    );
};

export default HomePage;