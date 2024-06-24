import React, { Suspense } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Header from '../layout/Header';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import { Preloader } from '../components/Preloader';
import Projects from '../components/Projects';

export default function App() {
    return (
        <Suspense fallback={<Preloader />}>
            <div className="font-poppins">
                <Preloader></Preloader>
                <Header></Header>
                <Home></Home>
                <About></About>
                <Skills></Skills>
                <Timeline></Timeline>
                <Projects></Projects>
                <Contact></Contact>
            </div>
        </Suspense>
    );
}
