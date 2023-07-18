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


import mobileScreenImg from "./assets/mobile-screen.jpg";
import mobileScreenImgCutout from "./assets/mobile-screen-cutout.png"
import mobileScreenImgBg from "./assets/mobile-screen-bg.jpg"

import chessPiecesImg from "./assets/chess-pieces.png";
import chessPiecesImgCutout from "./assets/chess-pieces-cutout.png"
import chessPiecesImgBg from "./assets/chess-pieces-bg.png"

import girlPortraitImg from "./assets/girl-portrait.png";
import girlPortraitImgCutout from "./assets/girl-portrait-cutout.png"
import girlPortraitImgBg from "./assets/girl-portrait-bg.png"


function App() {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark')

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
        short: "Portfolio site for my artist client. Beautiful material UI simple chess clock.",
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
                        items={items} 
                        isDarkMode={isDarkMode} 
                    />}
                />
                <Route path="/projects" 
                    element={
                    <Projects 
                        items={items}
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
