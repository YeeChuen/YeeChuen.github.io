import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import { ImageBackdrop, ImageIconButton } from './ImageConst';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';

const images = [
    {
        url: require('./images/portfolio/resume.jpg'),
      title: 'Resume',
      width: '100%',
      href: '/resume',
    },
    {
        url: require('./images/portfolio/greenCode.jpg'),
      title: 'Computer Science Portfolio',
      width: '100%',
      href: '/portfolio/computerscience',
    },
    {
        url: require('./images/portfolio/rotaryRiverwalk.png'),
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
                                backgroundPosition: 'center 0%',
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