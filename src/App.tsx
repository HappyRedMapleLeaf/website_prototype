import "./App.css"

import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Footer from './components/Footer/Footer'
import ScrollButton from "./components/ScrollButton/ScrollButton"

import Home from "./pages/Home/Home"
import Projects from "./pages/Projects/Projects"

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
}

export default function App() {
    return (
        <>
            <ScrollToTop />
                <Routes>
                    <Route path='/projects' element={<Projects />}></Route>
                    <Route path='/' element={<Home />}></Route>
                </Routes>
            <Footer />
            <ScrollButton />
        </>
    )
}