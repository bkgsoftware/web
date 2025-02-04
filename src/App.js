import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/*<Route path="/services" element={<ServicesPage />} />*/}
          {/*<Route path="/about" element={<AboutPage />} />*/}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FooterBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
