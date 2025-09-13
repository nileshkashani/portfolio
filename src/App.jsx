import './App.css';

import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills';
import Project from './components/project.jsx';
import Contact from './components/contact.jsx';
import Copyright from './components/copyright.jsx';

function App() {
  return (
    <>
      {alert("If there is any problem in page, please open it in your browser")}
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Project />
      <Contact />
      <Copyright/>
    </>
  );
}

export default App;
