import logo from './logo.svg';
import './App.css';
import Navigationbar from './components/Navigationbar';
import HomePage from './pages/Home';
import AboutMe from './pages/AboutMe';
import Architecture from './pages/Architecture';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Software from './pages/Software';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { Text, Flex, Box } from 'rebass';

import { Link, Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <div className='Title'>
          <Flex
            px={2}
            color='black'
            alignItems='center'
          >
            <a className={'TitleLink'} href='/'>
              <Text fontSize={4} fontWeight='bold'>Title</Text>
            </a>
          </Flex>
        </div>
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/resume' element={<Resume />} />
          <Route path = '/portfolio' element={<Portfolio />} />
          <Route path = '/portfolio/software' element={<Software />} />
          <Route path = '/portfolio/architecture' element={<Architecture />} />
          <Route path = '/about' element={<AboutMe />} />
          <Route path = '/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
