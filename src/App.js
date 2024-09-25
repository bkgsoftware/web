import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NavBar from "./components/NavBar";
function App() {
    return (
        <Router>
            <NavBar></NavBar>

            <Routes>
                <Route path="/" element={<LandingPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;