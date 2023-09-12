import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Typography from '../components/Typography';
import Box from '@mui/material/Box';
import { Image, Flex } from 'rebass';

const Contact =()=> {
    const social1 = require('./images/socials/gmail.png');
    const social2 = require('./images/socials/phone.png');
    const social3 = require('./images/socials/github.png');
    const social4 = require('./images/socials/Iowa State University.png');
    const social5 = require('./images/socials/linkedin.png');
    const social6 = require('./images/socials/instagram.png');

    const copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the whole text area selected.
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
      };

    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                Contact
            </Typography>
            <Flex flexWrap='wrap' mx={-2}>   
                <Box px={0} py={2} width={1/2}>
                    <a href={'mailto:tychuen98@gmail.com'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={social1}
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
                            Email: 
                            <div>tychuen98@gmail.com</div>
                            <div style={{ marginBottom: 30 }}/>
                        </Typography>
                    </a>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <a href={'tel:515-735-8778'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={social2}
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
                            Phone: 
                            <div>+1(515)-735-8778</div>
                            <div style={{ marginBottom: 30 }}/>
                        </Typography>
                    </a>
                </Box>
                <Box px={0} py={2} width={1/2}>
                    <a href={'https://github.com/YeeChuen'} style={{ textDecoration:'none' }}>
                        <Image
                        width={[ 1, 1, 1/2 ]}
                        src={social3}
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
                        src={social4}
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
                        src={social5}
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
                        src={social6}
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