import React from 'react';
import { Flex, Box, Card, Text, Image } from 'rebass';
import './style.css';

const AboutMe =()=> {
    return (
        <>
            <Flex>
                <Box width={1/3}>
                    <Card
                            p={2}
                            py={0}
                            backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                            backgroundSize='cover'
                            borderRadius={8}
                            color='white'
                            bg='white'
                        >
                        <Text color='grey' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </Card>
                </Box>
                <Box width={2/3}>
                    <a href='' style={{ textDecoration: 'none' }}>
                        <Card
                            backgroundSize='cover'
                            color='white'
                            bg='#f9f9f9'
                        >
                            <Image
                                src={require('./images/testimage.JPG')}
                            />
                        </Card>
                    </a>
                </Box>
            </Flex>
            <Flex>
                <Box width={2/3}>
                    <a href='' style={{ textDecoration: 'none' }}>
                        <Card
                            p={2}
                            py={7}
                            backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                            backgroundSize='cover'
                            borderRadius={8}
                            color='white'
                            bg='grey'
                        >
                            <Text color='white' >Contact</Text>
                        </Card>
                    </a>
                </Box>
                <Box width={1/3}>
                    <a href='' style={{ textDecoration: 'none' }}>
                        <Card
                            p={2}
                            py={7}
                            backgroundImage='url(https://source.unsplash.com/random/1024x768)'
                            backgroundSize='cover'
                            borderRadius={8}
                            color='white'
                            bg='white'
                        >
                            <Text color='grey' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        </Card>
                    </a>
                </Box>
            </Flex>
        </>
    );
};

export default AboutMe;