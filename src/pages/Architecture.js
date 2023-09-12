import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';

const rotaryRiverwalk = [
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR1.jpg'),
      title: 'Rotary Riverwalk view 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR2.jpg'),
      title: 'Rotary Riverwalk view 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR3.jpg'),
      title: 'Rotary Riverwalk view 4',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR4.jpg'),
      title: 'Rotary Riverwalk view 5',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR5.jpg'),
      title: 'Rotary Riverwalk view 5',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR7.jpg'),
      title: 'Rotary Riverwalk view 7',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/RotaryRiverwalk/RR8.jpg'),
      title: 'Rotary Riverwalk view 8',
      width: '100%',
      href: '/about',
    },
]

const moMAI = [
    {
      url: require('./images/architecture portfolio/Momai/final1.png'),
      title: 'Momai view 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/Momai/final2.png'),
      title: 'Momai view 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/Momai/final3.png'),
      title: 'Momai view 3',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/Momai/plan.jpg'),
      title: 'Momai professional plan document',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/Momai/section1.png'),
      title: 'Momai render section view 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/Momai/section2.png'),
      title: 'Momai render section view 2',
      width: '100%',
      href: '/about',
    },
]

const Four2Showarch = [
    {
      url: require('./images/architecture portfolio/42Showarch/render1.jpg'),
      title: '42Showarch view 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/42Showarch/render2.jpg'),
      title: '42Showarch view 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/42Showarch/render3.jpg'),
      title: '42Showarch view 3',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/42Showarch/section1.jpg'),
      title: '42Showarch section view 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/42Showarch/section2.jpg'),
      title: '42Showarch section view 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/42Showarch/model1.jpg'),
      title: '42Showarch  model 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/architecture portfolio/42Showarch/iteration.jpg'),
      title: '42Showarch  physical final iteration model',
      width: '100%',
      href: '/about',
    },
]

const Architecture =()=> {

    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                Architecture Portfolio
            </Typography>
            <Typography
                variant="h6"
                color="black"
            >
                Ever since I was young, I've dedicated most of my free time to creating art. In 2016, I made the decision to pursue a Bachelor's degree in Architecture, and I proudly graduated with Cum Laude honors in Bachelor of Architecture in 2021. The field of Architecture has imparted upon me a priceless skill – the ability to think critically both within and beyond the realm of design. In the following section, I would like to showcase a selection of my architecture projects.
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Typography
                variant="h5"
                color="black"
            >
                Rotary Riverwalk
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                {rotaryRiverwalk.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
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
                <div style={{ marginBottom: 20 }}>
                The Rotary Riverwalk project anticipates the necessity of enabling speculative investigations into large-scale densification strategies in the Midwest region. Specifically, we aim to examine the implementation of a highly replicable urban module in Des Moines and its neighboring suburbs. The Rotary Riverwalk represents a recurring urban component situated on water, harnessing the power of water currents to generate sustainable energy solutions.
                </div>
                <div>
                Collaborating with my partner, our enthusiasm was piqued by an innovative urban unit concept situated along the Des Moines River. We delved into extensive research to explore effective urban planning methods, drawing inspiration from diverse sources ranging from gaming concepts to historical urban cityscapes. To present this ambitious large-scale architectural endeavor, we employed a range of techniques, including detailed renders and comprehensive diagrams.
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>

            
            <Typography
                variant="h5"
                color="black"
            >
                M o M A I
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                {moMAI.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
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
                <div style={{ marginBottom: 20 }}>
                MoMAI, a 25,000-square-foot educational museum, is dedicated to narrating the compelling tales of the Pacific Northwest's aviation and maritime industries, encapsulating the essence of the places, people, and objects that have shaped the region's history. Conceived as a sibling institution to Seattle's Museum of History and Industry (MOHAI), MoMAI distinguishes itself by its forward-looking perspective. The museum's unique identity lies in its commitment to showcasing innovation and ongoing visionary endeavors within the context of contemporary architectural design.
                </div>
                <div>
                In addition to fulfilling its programmatic objectives, I envision MoMAI as a beacon of sustainable architecture, poised to address potential future crises stemming from pressing environmental issues. Central to this vision is the incorporation of a green roof designed to harness natural daylight. This sustainable feature is not only a testament to the viability of eco-conscious design but is also substantiated through detailed sections, 3D model renders, and a physical model, underscoring its practicality and effectiveness in the architectural context.
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>

            
            <Typography
                variant="h5"
                color="black"
            >
                42Showarch
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                {Four2Showarch.map((image) => (
                    <Box
                    sx={{
                        position: 'relative',
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
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
                <div style={{ marginBottom: 20 }}>
                The concept of 42Showarch revolves around ingeniously repurposing the unused airspace above an extant structure, thereby introducing a vertical campus replete with a myriad of amenities, including student housing, studio facilities, and public programs. At its core, this project envisions the transformation of abandoned air-right spaces into innovative student housing solutions. Elevated to new heights, 42Showarch takes the form of a high-rise campus, with a central core structure serving as an archival space to celebrate and exhibit the creative achievements of its talented denizens.
                </div>
                <div>
                Within the project, my role is centered around the collaborative exploration of diverse design possibilities in harmony with our vision for a vertical campus catering to architecture students. My responsibilities encompass critical tasks such as construction documentation and the meticulous production of physical models, both of which play pivotal roles in translating our creative concepts into tangible architectural solutions.
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>

            <Typography
                variant="h5"
                color="black"
            >
                Skills:
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Typography
                variant="h6"
                color="black"
            >
                Rhinoceros 3D, Revit, SketchUp, V-Ray, Lumion, Adobe Illustrator, 
                Adobe InDesign, Adobe Photoshop, AutoCAD, ArchiCAD, Physical Modeling, 
                Laser Cutting.
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            </Container>
        </>
    );
};

export default Architecture;