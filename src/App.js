import React from 'react';
import Header from "./components/Header";
import Hero from './components/Hero';
import TitleSection from './components/TitleSection';
import FeatureSection from './components/FeatureSection';
import FeatureSectionImage1 from './assets/featuresection1.png';
import FeatureSectionImage2 from './assets/featuresection2.png';

function App() {
    return (
    <div className="min-h-screen flex flex-col">
        <Header/>
        <Hero/>
        <TitleSection title="Our Services" description="We offer a wide range of services to help your business succeed"/>
        <FeatureSection title="Web Development" description="We build websites that are fast, secure, and easy to use maybe" imageSrc={FeatureSectionImage1} />
        <FeatureSection title="User Design" description="Something about unique design for their yadda yadda yadda" imageSrc={FeatureSectionImage2} reverse='True' />
    </div>
    );
}

export default App;