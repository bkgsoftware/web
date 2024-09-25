import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components/pages
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage'
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>

            </Routes>
        </Router>
    );
}

export default App;