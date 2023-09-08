import React from 'react';
import { Image, Flex, Text, Card, Heading } from 'rebass';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { ImageBackdrop, ImageIconButton } from './ImageConst';

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

export default function HomePage() {
    const backgroundImage =
    'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400';
  

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
                backgroundPosition: 'center 40%',
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
        ))}
      </Box>
    </Container>
  );
}

const HomePageOld =()=> {
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
