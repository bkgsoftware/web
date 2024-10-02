import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import ContactPage from './pages/ContactPage';
// import NavBar from "./components/NavBar";
// import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Hero from './components/Hero';

function App() {
    return (
      // <Router>
      //     <NavBar></NavBar>

      //     <Routes>
      //         <Route path="/" element={<LandingPage/>}/>
      //         <Route path="/about" element={<AboutPage/>}/>
      //         <Route path="/contact" element={<ContactPage/>}/>
      //     </Routes>
      // </Router>
    //   <div className="min-h-screen flex flex-col">
    //     <Header />
    //     <main className="flex-grow">
    //       <WelcomeSection />
    //       <ServicesSection />
    //     </main>
    //     <Footer />
    //   </div>
    <div className="min-h-screen flex flex-col">
        <Header/>
        <Hero/>
    </div>
    );
}

export default App;