import './App.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This is a React Router v6 app
import {
    Routes,
    Route,
} from "react-router-dom";

import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

import Navbar from './components/Navbar'
import Footer from './components/Footer';


import blackBg from "./assets/black-bg.jpg";

import mobileScreenImg from "./assets/mobile-screen.jpg";
import mobileScreenImgCutout from "./assets/mobile-screen-cutout.png"
import mobileScreenImgBg from "./assets/mobile-screen-bg.jpg"

import chessPiecesImg from "./assets/chess-pieces.png";
import chessPiecesImgCutout from "./assets/chess-pieces-cutout.png"
import chessPiecesImgBg from "./assets/chess-pieces-bg.png"

import girlPortraitImg from "./assets/girl-portrait.png";
import girlPortraitImgCutout from "./assets/girl-portrait-cutout.png"
import girlPortraitImgBg from "./assets/girl-portrait-bg.png"

import snakeGameImg from "./assets/snake-game.jpg";
import snakeGameImgCutout from "./assets/snake-game-cutout.png";

import pythonCalcuImg from './assets/python-calcu.jpg';
import pythonCalcuImgCutout from './assets/python-calcu-cutout.png';


function App() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark')

    // This useEffect hook will run once when the component mounts
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const items = [{
        id: 1,
        title: "Mobile Screen",
        short: "Simple, interactive mobile screen to showcase your projects.",
        fullImg: mobileScreenImg,
        bgImg: mobileScreenImgBg,
        cutoutImg: mobileScreenImgCutout,
        border: "border-top-behind border-right-behind border-left-behind",
        href: "https://thureindev.github.io/web-components"
    }, {
        id: 2,
        title: "Nandar Blender",
        short: "Portfolio site for my artist client.",
        fullImg: girlPortraitImg,
        bgImg: girlPortraitImgBg,
        cutoutImg: girlPortraitImgCutout,
        border: "border-top-behind border-bottom-behind",
        href: "https://www.nandarblender.com"
    }, {
        id: 3,
        title: "Chess Clock",
        short: "Beautiful material UI simple chess clock.",
        fullImg: chessPiecesImg,
        bgImg: chessPiecesImgBg,
        cutoutImg: chessPiecesImgCutout,
        border: "border-right-behind border-left-behind",
        href: "https://thureindev.github.io/chess-clock"
    },{
        id: 4,
        title: "Python Calculator",
        short: "Console Calculator in Python.",
        fullImg: pythonCalcuImg,
        bgImg: blackBg,
        cutoutImg: pythonCalcuImgCutout,
        border: "border-right-behind border-left-behind",
        href: "https://github.com/thureindev/python-calcu"
    },{
        id: 5,
        title: "Snake Game in Python",
        short: "Classic Snake Game Using Tkinter, turtle.",
        fullImg: snakeGameImg,
        bgImg: blackBg,
        cutoutImg: snakeGameImgCutout,
        border: "border-right-behind border-left-behind border-top-behind border-bottom-behind",
        href: "https://github.com/thureindev/snake-game-python"
    },
    ]

    // Get the current location
    const location = useLocation();
    console.log(location.pathname)

    useEffect(() => {
        setIsSideNavOpen(false); // Close the navigation when the location changes
    }, [location]);

    return (
        <>
            <Navbar
                location_path={location.pathname} // Pass the current path as a prop

                open={isSideNavOpen}
                setOpen={setIsSideNavOpen}

                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
            />

            <Routes>

                <Route path="/" 
                    element={
                    <Home 
                        items={items.slice(0, 3)} 
                        isDarkMode={isDarkMode} 
                    />}
                />
                <Route path="/projects" 
                    element={
                    <Projects 
                        items={items.reverse()}
                        isDarkMode={isDarkMode} 
                    />} 
                />
                {/* <Route path="users/*" element={<Projects />} /> */}
                <Route path="/blog" element={<Blog isDarkMode={isDarkMode} />} />
                <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            </Routes>

            <Footer />
        </>
    )
}

export default App
