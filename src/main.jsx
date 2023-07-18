import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    BrowserRouter,
    HashRouter
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        {/* Because GH Pages doen not work well with BrowserRouter */}
        <HashRouter>

            <App />

        </HashRouter>
        {/* </BrowserRouter> */}
    </React.StrictMode>,
)
