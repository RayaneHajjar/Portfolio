import React from 'react';

import './styles/globals.scss';

import Header from './components/Header.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
