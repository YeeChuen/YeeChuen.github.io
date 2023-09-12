import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';

const images1 = [
    {
      url: require('./images/about me/cat.JPG'),
      title: 'About Me',
      width: '100%',
      href: '/about',
    },
];
const images2 = [
    {
      url: require('./images/about me/twintower.jpg'),
      title: 'About Me',
      width: '100%',
      href: '/about',
    },
];
const images3 = [
    {
      url: require('./images/about me/badmintonPic.jpg'),
      title: 'About Me',
      width: '100%',
      href: '/about',
    },
];
const images4 = [
    {
      url: require('./images/about me/nba.jpg'),
      title: 'About Me',
      width: '100%',
      href: '/about',
    },
];
const images5 = [
    {
      url: require('./images/about me/yosemite.jpg'),
      title: 'About Me',
      width: '100%',
      href: '/about',
    },
];

const AboutMe =()=> {
    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                About Me
            </Typography>
            <Carousel>
                {images1.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 55%',
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
                I am Yee Chuen Teoh, an absolute cat lover.
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images2.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 20%',
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
                Malaysia is where I grew up, we have insane architecture here in Malaysia, 
                check out this famous twintower located in Kuala Lumpur, Malaysia, and oh, 
                did I also mention that we have amazing food as well?
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images3.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 50%',
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
                I have several interests, and I would like to share them. Firstly, my greatest passion lies in badminton, where I have had the opportunity to forge incredible friendships and proudly own a beautiful hot pink racket.
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images4.map((image) => (
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
                Next on the list is basketball. I used to play basketball every day; it was like having appetizers before dinner. Nowadays, I frequently watch the NBA and have even attended a live game: Dallas Mavericks vs. Washington Wizards. However, my favorite team has to be the Golden State Warriors!
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Carousel>
                {images5.map((image) => (
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
                Last but certainly not least, I thoroughly enjoy spending time with my friends. This particular picture was taken during a hike in Yosemite with some of my closest friends. The scenery was absolutely incredible, and the company was equally amazing.
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            </Container>
        </>
    );
};

export default AboutMe;