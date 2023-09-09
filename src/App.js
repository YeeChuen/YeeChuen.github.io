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
import Typography from './components/Typography';
import AppBar from './components/Appbar';

import { Link, Router, Route, Routes, BrowserRouter, HashRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <AppBar/>
        <Routes>
          <Route exact path = '' element={<HomePage />} />
          <Route path = 'resume' element={<Resume />} />
          <Route path = 'portfolio' element={<Portfolio />} />
          <Route path = 'portfolio/software' element={<Software />} />
          <Route path = 'portfolio/architecture' element={<Architecture />} />
          <Route path = 'about' element={<AboutMe />} />
          <Route path = 'contact' element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
