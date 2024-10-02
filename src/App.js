import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import FooterBar from "./components/FooterBar";

function App() {
    return (
        <Router>
            <header>
                <NavBar></NavBar>
            </header>

            <body className="flex flex-col min-h-screen">
                <Routes className="flex flex-col min-h-screen">
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                </Routes>
            </body>

            <footer className="mt-auto">
                <FooterBar></FooterBar>
            </footer>
        </Router>
    );
}

export default App;