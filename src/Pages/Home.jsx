import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;