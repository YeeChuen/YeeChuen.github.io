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

import { Router, Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This website is under maintenance
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigationbar />
        <Routes>
          <Route path = '/' element={<HomePage />} />
          <Route path = '/home' element={<HomePage />} />
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
