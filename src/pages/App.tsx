import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Header from '../layout/Header';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Index() {
    return (
        <div className="w-screen h-screen font-poppins overflow-x-hidden">
            <Header></Header>
            <Home></Home>
            <About></About>
            <Experiences></Experiences>
            <Skills></Skills>
            <Contact></Contact>
        </div>
    );
}