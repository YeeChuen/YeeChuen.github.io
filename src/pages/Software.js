import React from 'react';
import './style.css';
import Container from '@mui/material/Container';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Typography from '../components/Typography';
import Box from '@mui/material/Box';
import YoutubeEmbed from '../components/YoutubeEmbed';
import Button from '@mui/material/Button';

const sudocore = [
    {
      url: require('./images/CS portfolio/Sudocore/Sudocore1.jpg'),
      title: 'Sudocore page view 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/Sudocore/Sudocore2.jpg'),
      title: 'Sudocore page view 2',
      width: '100%',
      href: '/about',
    },
]

const othellAI = [
    {
      url: require('./images/CS portfolio/othelloRL/OthelloAI.jpg'),
      title: 'Othello AI board',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/othelloRL/Presentation1.jpg'),
      title: 'Agent 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/othelloRL/Presentation2.jpg'),
      title: 'Agent 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/othelloRL/Presentation3.jpg'),
      title: 'Agent 3',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/othelloRL/Presentation4.jpg'),
      title: 'Agent 4',
      width: '100%',
      href: '/about',
    },
]

const battleNightBox = [
    {
      url: require('./images/CS portfolio/BattleNightBox/picture1.PNG'),
      title: 'BattleNightBox picture 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/BattleNightBox/picture2.PNG'),
      title: 'BattleNightBox picture 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/BattleNightBox/picture3.PNG'),
      title: 'BattleNightBox picture 3',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/BattleNightBox/picture4.PNG'),
      title: 'BattleNightBox picture 4',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/BattleNightBox/picture5.PNG'),
      title: 'BattleNightBox picture 5',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/BattleNightBox/picture6.PNG'),
      title: 'BattleNightBox picture 6',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/BattleNightBox/picture7.PNG'),
      title: 'BattleNightBox picture 7',
      width: '100%',
      href: '/about',
    },
]

const eightPuzzle = [
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part2S1.JPG'),
      title: '8 puzzle solver picture 1',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part2S2.JPG'),
      title: '8 puzzle solver picture 2',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part2S4.JPG'),
      title: '8 puzzle solver picture 4',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part2S5.JPG'),
      title: '8 puzzle solver picture 5',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part3L8.JPG'),
      title: '8 puzzle solver picture 6',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part3L15.JPG'),
      title: '8 puzzle solver picture 7',
      width: '100%',
      href: '/about',
    },
    {
      url: require('./images/CS portfolio/8puzzleSolver/Part3L24.JPG'),
      title: '8 puzzle solver picture 8',
      width: '100%',
      href: '/about',
    },
]

const Software =()=> {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = require('./images/portfolio/resume.jpg');
        link.href = require('./images/portfolio/resume.jpg');
        link.click();
      };
    
    return (
        <>
            <Container component="section" sx={{ mb: 4 }}>
            <Typography sx={{ mt: 10, mb: 4 }} variant="h4" marked="center" align="center" component="h2">
                Computer Science Portfolio
            </Typography>
            <Typography
                variant="h6"
                color="black"
            >
                My first encounter with programming was in 2020 when I enrolled in COM S 227, an object-oriented programming course as one of my electives. At that moment, I realized that programming was one of my passions, as I found myself dedicating more time to coding than my major courses. Since then, my enthusiasm for Computer Science has continued to grow, culminating in my current pursuit of a Master of Computer Science degree. In the following section, I am eager to present a selection of projects I have undertaken during my journey in the field of Computer Science<hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            <Typography
                variant="h5"
                color="black"
            >
                Sudocore
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                <YoutubeEmbed embedId="U1WB_UstNSw" />
                {sudocore.map((image) => (
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
                        height: '100%', 
                    }}
                    />
                ))}
            </Carousel>
            <Typography
                variant="h6"
                color="black"
            >
                <div style={{ marginBottom: 20 }}>
                As we transition into the era of IoT, many businesses are in the process of upgrading their legacy technologies to newer, interconnected devices. Yet, the diversity of brands, models, and associated apps can present a challenge when it comes to effectively managing and monitoring this array of devices.
                </div>
                <div style={{ marginBottom: 20 }}>
                Sudocore aims to provide businesses with a comprehensive solution by allowing them to centralize all their devices within a single application. Through this platform, businesses can seamlessly control these devices and access valuable data regarding their usage patterns, including duration and power consumption. This functionality empowers businesses to identify opportunities for energy conservation and detect anomalies, such as devices running longer than expected.
                </div>
                <div>
                Link to Sudocore Submission to SacHackIV: <a href='https://devpost.com/software/sudocore'>Sudocore Devpost</a>
                </div>
                <div>
                Link to Sudocore github page: <a href='https://github.com/diesmo-co/sackhacks-iv'>Sudocore Github</a>
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            
            <Typography
                variant="h5"
                color="black"
            >
                Othello AI
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                {othellAI.map((image) => (
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
                The Othello AI project is designed to serve as a practical exploration of reinforcement learning and its applicability in addressing complex sequential decision-making challenges characterized by extensive state spaces. Othello, a strategic board game, serves as an ideal testbed for evaluating the capabilities of machine learning methodologies.
                </div>
                <div style={{ marginBottom: 30 }}>
                Within the Othello AI project, we employ reinforcement learning algorithms, specifically Sarsa and Q-learning, to facilitate learning and decision-making. It's essential to emphasize that our primary objective is not to develop an agent capable of achieving the ultimate Othello gameplay. Instead, our aim is to gain insights and a deeper understanding of the various research questions and challenges that arise when applying reinforcement learning techniques to the intricacies of the Othello game.
                </div>
                <div style={{ marginBottom: 20 }}>
                Image 2 shows a win/lost graph of agent Sarsa trained by random agent, against varying opponent. 
                </div>
                <div style={{ marginBottom: 20 }}>
                Image 3 shows a win/lost graph of agent Sarsa trained by heuristic agent, against varying opponent. 
                </div>
                <div style={{ marginBottom: 20 }}>
                Image 4 shows a win/lost graph of agent Q-Learning trained by random agent, against varying opponent.
                </div>
                <div style={{ marginBottom: 20 }}>
                Image 5 shows a win/lost graph of agent Q-Learning trained by heuristic agent, against varying opponent.
                </div>
                <div>
                To read about this project: 
                <Button sx={{ marginLeft: 1 }} onClick={onDownload} variant="contained" color="primary">
                Download Othello AI paper
                </Button>
                </div>
                <div>
                Link to Othello AI github page: <a href='https://github.com/sriram98v/othello-RL'>Othello AI Github</a>
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            
            <Typography
                variant="h5"
                color="black"
            >
                BattleNightBox
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                {battleNightBox.map((image) => (
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
                During the pandemic, enjoying my favorite game on jackbox.tv presented a challenge when playing virtually. Using video call applications to stream the host's screen often resulted in delays for remote players.
                </div>
                <div style={{ marginBottom: 20 }}>
                To address this issue, I developed BattleNightBox, a multiplayer mini-game application that offers players the flexibility to choose their preferred game. Before entering the game, each player is prompted to select whether they wish to use their device as the view screen or use as controller. This innovative approach ensures that all players can view the same host screen simultaneously, eliminating the need for video call apps and minimizing delays during gameplay.</div>
                <div>
                Link to BattleNightBox github: <a href='https://github.com/Yuan325/BattleNightBox'>BattleNightBox github</a>
                </div>
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
                    
            <Typography
                variant="h5"
                color="black"
            >
                8 puzzle solver AI
                <div style={{ marginBottom: 10 }}/>
            </Typography>
            <Carousel>
                {eightPuzzle.map((image) => (
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
                The 8 puzzle solver AI is an artificial intelligence system that does not rely on machine learning. When provided with an incomplete 8 puzzle, this system runs simulations and swiftly generates the necessary steps to solve the puzzle.
                </div>
                <div style={{ marginBottom: 20 }}>
                The primary objectives of this project are to conduct a comparative analysis of various non-machine learning techniques. These techniques include Breadth-First Search, Depth-First Search, A* search with three distinct heuristics (misplaced tiles heuristic, Manhattan heuristic, and Manhattan + reversal heuristic), and Iterative Deepening Search.
                </div>
                <div>
                Link to 8 puzzle solver AI github: <a href='https://github.com/YeeChuen/8-puzzle-solver-AI'>8 puzzle solver AI github</a>
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
                Python, Java, JavaScript, TypeScript, SQL, HTML, CSS, 
                React, React Native, Flask, Nodejs, JSON, Express, Pytorch,
                Tensorflow.
                <hr/>
                <div style={{ marginBottom: 30 }}/>
            </Typography>
            </Container>
        </>
    );
};

export default Software;