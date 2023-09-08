import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import { ImageBackdrop, ImageIconButton } from './ImageConst';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';
import { Image, Flex, Text, Card, Heading } from 'rebass';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const images = [
    {
      url: require('./images/testimage.JPG'),
      title: 'About Me',
      width: '100%',
      href: '/about',
    },
    {
      url: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400',
      title: 'Portfolio',
      width: '100%',
      href: '/portfolio',
    },
    {
      url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400',
      title: 'Contact',
      width: '100%',
      href: '/contact',
    },
  ];

const Contact =()=> {
    const backgroundImage =
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                Contact
            </Typography>
            <Flex flexWrap='wrap' mx={-2}>   
                <Box px={0} py={2} width={1/2}>
                    <Image
                    width={[ 1, 1, 1/2 ]}
                    src={backgroundImage}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        overflow: "hidden",
                        borderWidth: 3,
                        borderColor: "red"
                    }}
                    />
                    <Typography
                        variant="h6"
                        color="black"
                    >
                        Email
                        <div style={{ marginBottom: 30 }}/>
                    </Typography>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <Image
                    width={[ 1, 1, 1/2 ]}
                    src={backgroundImage}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        overflow: "hidden",
                        borderWidth: 3,
                        borderColor: "red"
                    }}
                    />
                    <Typography
                        variant="h6"
                        color="black"
                    >
                        Phone number
                        <div style={{ marginBottom: 30 }}/>
                    </Typography>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <a href={'https://github.com/YeeChuen'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={backgroundImage}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150 / 2,
                            overflow: "hidden",
                            borderWidth: 3,
                            borderColor: "red"
                        }}
                        />
                        <Typography
                            variant="h6"
                            color="black"
                        >
                            Github
                            <div style={{ marginBottom: 30 }}/>
                        </Typography>
                    </a>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <a href={'https://www.cs.iastate.edu/people/yee-chuen-teoh'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={backgroundImage}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150 / 2,
                            overflow: "hidden",
                            borderWidth: 3,
                            borderColor: "red"
                        }}
                        />
                        <Typography
                            variant="h6"
                            color="black"
                        >
                            ISU website
                            <div style={{ marginBottom: 30 }}/>
                        </Typography>
                    </a>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <a href={'https://www.linkedin.com/in/yeechuenteoh/'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={backgroundImage}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150 / 2,
                            overflow: "hidden",
                            borderWidth: 3,
                            borderColor: "red"
                        }}
                        />
                        <Typography
                            variant="h6"
                            color="black"
                        >
                            LinkedIn
                            <div style={{ marginBottom: 30 }}/>
                        </Typography>
                    </a>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <a href={'https://www.instagram.com/_chuen.t/'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={backgroundImage}
                        style={{
                            width: 150,
                            height: 150,
                            borderRadius: 150 / 2,
                            overflow: "hidden",
                            borderWidth: 3,
                            borderColor: "red"
                        }}
                        />
                        <Typography
                            variant="h6"
                            color="black"
                        >
                            Instagram
                            <div style={{ marginBottom: 30 }}/>
                        </Typography>
                    </a>
                </Box>
            </Flex>
            </Container>
        </>
    );
};

export default Contact;