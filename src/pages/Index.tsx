import React from 'react';
import Header from '../layout/Header';
import Home from '../components/Home';
import About from '../components/About';


export default function Index() {
    return (
        <div className="w-screen h-screen font-poppins overflow-x-hidden">
            <Header></Header>
            <Home></Home>
            <About></About>
        </div>
    );
}