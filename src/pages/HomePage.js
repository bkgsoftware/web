import Hero from '../components/Hero';
import TitleSection from '../components/TitleSection';
import FeatureSection from '../components/FeatureSection';
import FeatureSectionImage1 from '../assets/featuresection1.png';
import FeatureSectionImage2 from '../assets/featuresection2.png';

const titleDescription = "We specialize in creating cloud-native solutions and custom business tools that streamline operations, enhance efficiency, and enable growth. With expertise in cloud platforms like AWS and GCP, alongside back-end and JavaScript frameworks, we design and develop systems that scale with your business."
const featureDesciption1 = "Our team is adept at leveraging cloud services to create scalable, secure, and efficient solutions. Whether you're migrating to the cloud or optimizing your current infrastructure, we deliver cloud strategies tailored to your business."
const featureDesciption2 = "We develop custom software solutions that integrate seamlessly into your business, automating workflows and simplifying day-to-day operations. From enterprise-level applications to targeted business tools, we ensure your software works for you"
const featureDesciption3 = "Combining modern JavaScript frameworks and robust back-end technologies, we build fast, scalable applications that support your business goals. Our solutions are designed to grow alongside your company, providing the flexibility and performance you need."


const HomePage = () => {
    return (
        <div>
            <Hero/>
            <TitleSection title="Our Services" description={titleDescription}/>
            <FeatureSection title="Cloud Intergration" description={featureDesciption1} imageSrc={FeatureSectionImage1} />
            <FeatureSection title="Custom Business Tools" description={featureDesciption2} imageSrc={FeatureSectionImage2} reverse='True' />
            <FeatureSection title="Web & App Development" description={featureDesciption3} imageSrc={FeatureSectionImage2} />
        </div>
    );
};

export default HomePage;