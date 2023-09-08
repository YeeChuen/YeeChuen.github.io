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
import Button from '@mui/material/Button';

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

const Resume =()=> {
    const backgroundImage =
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';

    const onDownload = () => {
        const link = document.createElement("a");
        link.download = require('./images/testimage.JPG');
        link.href = require('./images/testimage.JPG');
        link.click();
      };
    

    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                Yee Chuen's Resume
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
                TODO: Objective
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
                TODO: workexperience
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
                TODO: Education
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
                TODO: Relevant Projects
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
                TODO: Relevant Skills
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Typography
                variant="h6"
                color="black"
            >
            <Button sx={{ marginLeft: 1 }} onClick={onDownload} variant="contained" color="primary">
                Download Resume
            </Button>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            </Container>
        </>
    );
};

export default Resume;