
import blackBg from "./assets/black-bg.jpg";
import darkSlateBlueBg from "./assets/dark-slate-blue-bg.jpg";

import cocktailImg from "./assets/cocktail-glass.png";
import cocktailImgCutout from "./assets/cocktail-glass-cutout.png"
import cocktailImgBg from "./assets/cocktail-glass-bg.png"

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

const items = [{
    id: 1,
    title: "Tipsy Tavern",
    short: "Open your fridge and make a cocktail",
    fullImg: cocktailImg,
    bgImg: cocktailImgBg,
    cutoutImg: cocktailImgCutout,
    border: "border-top-behind border-right-behind border-left-behind",
    href: "https://thureindev.github.io/tipsy-tavern"
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
    title: "Mobile Screen",
    short: "Simple, interactive mobile screen to showcase your projects.",
    fullImg: mobileScreenImg,
    bgImg: mobileScreenImgBg,
    cutoutImg: mobileScreenImgCutout,
    border: "border-top-behind border-right-behind border-left-behind",
    href: "https://thureindev.github.io/web-components"
}, {
    id: 5,
    title: "Python Calculator",
    short: "Console Calculator in Python.",
    fullImg: pythonCalcuImg,
    bgImg: darkSlateBlueBg,
    cutoutImg: pythonCalcuImgCutout,
    border: "border-right-behind border-left-behind",
    href: "https://github.com/thureindev/python-calcu"
},{
    id: 6,
    title: "Snake Game in Python",
    short: "Classic Snake Game Using Tkinter, turtle.",
    fullImg: snakeGameImg,
    bgImg: blackBg,
    cutoutImg: snakeGameImgCutout,
    border: "border-right-behind border-left-behind border-top-behind border-bottom-behind",
    href: "https://github.com/thureindev/snake-game-python"
},
]

export default items;