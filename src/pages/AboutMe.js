import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import { ImageBackdrop, ImageIconButton } from './ImageConst';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';

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

const AboutMe =()=> {
    const backgroundImage =
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                About Me
            </Typography>
            <Carousel>
                {images.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                        backgroundImage: `url(${image.url})`,
                        width: '100%',
                        height: 500, 
                    }}
                    />
                ))}
            </Carousel>
            <Typography
                variant="h6"
                color="black"
            >
                TODO: Who Am I
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                        backgroundImage: `url(${image.url})`,
                        width: '100%',
                        height: 500, 
                    }}
                    />
                ))}
            </Carousel>
            <Typography
                variant="h6"
                color="black"
            >
                TODO: Where I am from
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                        backgroundImage: `url(${image.url})`,
                        width: '100%',
                        height: 500, 
                    }}
                    />
                ))}
            </Carousel>
            <Typography
                variant="h6"
                color="black"
            >
                TODO: Interest 1
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                        backgroundImage: `url(${image.url})`,
                        width: '100%',
                        height: 500, 
                    }}
                    />
                ))}
            </Carousel>
            <Typography
                variant="h6"
                color="black"
            >
                TODO: Interest 2
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 40%',
                        backgroundImage: `url(${image.url})`,
                        width: '100%',
                        height: 500, 
                    }}
                    />
                ))}
            </Carousel>
            <Typography
                variant="h6"
                color="black"
            >
                TODO: Interest 3
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            </Container>
        </>
    );
};

export default AboutMe;