import Hero from "../components/Hero";
import TitleSection from "../components/TitleSection";
import FeatureSection from "../components/FeatureSection";
import AppLaunch from "../assets/app-launch";
import Calculator from "../assets/calculator";
import IdeaLaunch from "../assets/idea-launch";
import BackgroundBlobs from "../components/BackgroundBlobs";

const titleDescription =
  "We partner with businesses to plan, build, and integrate technology solutions. From strategy to execution, we prioritize smooth adoption so you can focus on what matters most.";
const featureDesciption1 =
  "Our team is adept at leveraging the cloud to design resilient, always-available systems you can rely on. Cloud solutions provide you peace of mind and uninterrupted productivity.";
const featureDesciption2 =
  "We create software solutions that integrate seamlessly with existing workflows, or, entirely custom solutions to tackle new opportunities head-on.";
const featureDesciption3 =
  "Our web solutions blend sleek design and familiar interfaces with the usability of your favorite apps—designed specifically to enhance your business operations.";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <TitleSection title="Our Services" description={titleDescription} />
      <div className="flex flex-col py-16 gap-y-8">
        <FeatureSection
          title="Cloud Integration"
          description={featureDesciption1}
          svg={<AppLaunch className="max-w-[400px]" />}
        />
        <FeatureSection
          title="Custom Business Tools"
          description={featureDesciption2}
          svg={<Calculator className="max-w-[400px]" />}
          reverse="True"
        />
        <FeatureSection
          title="Web & App Development"
          description={featureDesciption3}
          svg={<IdeaLaunch className="max-w-[400px]" />}
        />
      </div>
    </div>
  );
};

export default HomePage;
