import Hero from "../components/Hero";
import TitleSection from "../components/TitleSection";
import FeatureSection from "../components/FeatureSection";
import FeatureSectionImage1 from "../assets/featuresection1.png";
import FeatureSectionImage2 from "../assets/featuresection2.png";

const titleDescription =
  "We partner with businesses to plan, build, and integrate cloud architecture. From strategy to execution, we prioritize smooth adoption so you can focus on what matters most.";
const featureDesciption1 =
  "Our team is adept at leveraging the cloud to design resilient, always-available systems you can rely on, giving you peace of mind and uninterrupted productivity.";
const featureDesciption2 =
  "We create software solutions built around your workflow, helping you make faster decisions and run your operations more efficiently.";
const featureDesciption3 =
  "Our web solutions blend sleek design and familiar interfaces with the usability of your favorite apps—designed specifically to enhance your business operations.";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TitleSection title="Our Services" description={titleDescription} />
      <FeatureSection
        title="Cloud Integration"
        description={featureDesciption1}
        imageSrc={FeatureSectionImage1}
      />
      <FeatureSection
        title="Custom Business Tools"
        description={featureDesciption2}
        imageSrc={FeatureSectionImage2}
        reverse="True"
      />
      <FeatureSection
        title="Web & App Development"
        description={featureDesciption3}
        imageSrc={FeatureSectionImage2}
      />
    </div>
  );
};

export default HomePage;
