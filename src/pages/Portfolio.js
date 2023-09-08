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
      url: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=400',
      title: 'Resume',
      width: '100%',
      href: '/resume',
    },
    {
      url: require('./images/testimage.JPG'),
      title: 'Computer Science Portfolio',
      width: '100%',
      href: '/portfolio/software',
    },
    {
      url: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400',
      title: 'Architecture Portfolio',
      width: '100%',
      href: '/portfolio/architecture',
    },
  ];

const Portfolio =()=> {
    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>  
                <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                    Portfolio
                </Typography>
                <Carousel>
                    {images.map((image) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <ImageIconButton
                            key={image.title}
                            style={{
                            width: image.width,
                            height: 600,
                            }}
                        >
                            <a href={image.href}>
                            <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center 40%',
                                backgroundImage: `url(${image.url})`,
                            }}
                            />
                            <ImageBackdrop className="imageBackdrop" />
                            <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'common.white',
                            }}
                            >
                            <Typography
                                component="h3"
                                variant="h4"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <div className="imageMarked" />
                            </Typography>
                            </Box>
                            </a>
                        </ImageIconButton>
                    </Box>
                    ))}
                </Carousel>
            </Container>
        </>
    );
};

export default Portfolio;