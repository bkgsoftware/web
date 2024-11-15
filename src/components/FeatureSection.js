import { useState, useEffect } from "react";

const TextSection = ({ title, description }) => (
  <div className="flex items-center justify-center w-full md:w-1/2">
    <div className="flex flex-col justify-center items-center px-8">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-8 text-black">
        {title}
      </h2>
      <p className="text-center text-black text-md lg:text-lg">{description}</p>
    </div>
  </div>
);

const ImageSection = ({ svg }) => (
  <div className="flex items-center justify-center md:w-1/2">
    {/* <img src={imageSrc} alt="stylistic graphic" className="px-8" /> */}
    {svg}
  </div>
);

const FeatureSection = ({ title, description, svg, reverse = false }) => {
  const [isMdScreen, setIsMdScreen] = useState(false);

  // Check window size to determine if it meets the lg breakpoint condition
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 768); // 1024px is the Tailwind `lg` breakpoint
    };

    // Initial check
    handleResize();

    // Event listener
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="flex justify-center items-center ml-auto mr-auto px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px]">
        {!reverse || !isMdScreen ? (
          <>
            <TextSection title={title} description={description} />
            <ImageSection svg={svg} />
          </>
        ) : (
          <>
            <ImageSection svg={svg} />
            <TextSection title={title} description={description} />
          </>
        )}
      </div>
    </section>
  );
};
export default FeatureSection;
