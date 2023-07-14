import './App.css'
import { useState } from 'react'
// This is a React Router v6 app
import {
    BrowserRouter,
    HashRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Home from './Home'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

import Navbar from './components/Navbar'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar></Navbar>
            {/* Because GH Pages doen not work well with BrowserRouter */}
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="users/*" element={<Projects />} /> */}
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
