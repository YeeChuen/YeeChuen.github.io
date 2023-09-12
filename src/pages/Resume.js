import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Image } from 'rebass';

const resumeFrontPic = [
    {
        url: require('./images/Resume/resumeFrontPic.jpg'),
      title: 'Resume Front Pic',
      width: '100%',
      href: '/portfolio',
    },
  ];

const workExperience = [
    {
        url: require('./images/Resume/appleStudio.jpg'),
      title: 'Resume Front Pic',
      width: '100%',
      href: '/portfolio',
    },
  ];

  const images = [
    {
      url: require('./images/portfolio/resume.jpg'),
      title: 'Apple Studio',
      width: '100%',
      href: '/about',
    },
  ];

const Resume =()=> {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = require('./images/portfolio/YeeChuen_Teoh_Resume.pdf');
        link.href = require('./images/portfolio/YeeChuen_Teoh_Resume.pdf');
        link.click();
      };

    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                Yee Chuen's Resume
            </Typography>
            <Carousel>
                {resumeFrontPic.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center 0%',
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
                <div style={{ marginBottom: 30 }}>
                I am Yee Chuen Teoh, currently pursuing a Master of Computer Science degree while simultaneously serving as a Bioinformatics Research Assistant at Iowa State University. My academic journey is set to culminate in Spring 2024, and upon graduation, I am eager to transition into the role of a software engineer, driven by my passion for the field.
                </div>
                <div>
                Below is my most up to date resume, check it out! by 9/11/2023.
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Image src={require('./images/portfolio/resume.jpg')} />
            
            <Typography
                variant="h6"
                color="black"
            >
                <hr/>
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