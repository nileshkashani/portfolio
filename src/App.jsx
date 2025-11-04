import './App.css';

import Details from './components/details.jsx';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills';
import Project from './components/project.jsx';
import Contact from './components/contact.jsx';
import Copyright from './components/copyright.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Copyright />
          </>
        } />
        <Route path="/details" element={<Details />} />
      </Routes>

    </>
  );
}

export default App;
