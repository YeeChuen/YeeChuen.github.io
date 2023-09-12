import React from 'react';
import { Flex, Text, Card, Heading } from 'rebass';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { ImageBackdrop, ImageIconButton } from './ImageConst';

const images = [
  {
    url: require('./images/homepage/Monkey.jpg'),
    title: 'About Me',
    width: '100%',
    href: '/about',
  },
  {
    url: require('./images/homepage/portfolio.jpg'),
    title: 'Portfolio',
    width: '100%',
    href: '/portfolio',
  },
  {
    url: require('./images/homepage/contact.jpg'),
    title: 'Contact',
    width: '100%',
    href: '/contact',
  },
];

export default function HomePage() {
    const backgroundImage = require('./images/homepage/HomepageFront.jpg');
  
  return (
    <Container component="section" sx={{ mb: 4 }}>
            <Box
              sx={{
                position: 'relative',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 60%',
                backgroundImage: `url(${backgroundImage})`,
                width: '100%',
                height: 600, 
              }}
            >
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
                    color="inherit"
                    align="center"
                    variant="h2"
                    component="h2"
                >
                    Welcome to Yee's site!
                </Typography>
                </Box>
            </Box>

        <Typography sx={{ mt: 4, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
            Explore the site
        </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              height: 400,
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
                backgroundPosition: 'center 10%',
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
        ))}
      </Box>
    </Container>
  );
}
