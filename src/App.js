import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import NavBar from "./components/NavBar";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <Router>
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;