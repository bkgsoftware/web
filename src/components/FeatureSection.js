
const TextSection = ({ title, description }) => (
  <div className="flex items-center justify-center w-full md:w-1/2">
    <div className="flex flex-col justify-center items-center p-8">
    <h2 className="text-center text-3xl lg:text-4xl font-bold mb-8 text-black">
      {title}
    </h2>
    <p className="text-center text-black text-md lg:text-lg">
      {description}
    </p>
    </div>
  </div>
);

const ImageSection = ({ imageSrc }) => (
  <div className="flex items-center justify-center md:w-1/2">
    <img src={imageSrc} alt="stylistic graphic" className="px-8"/>
  </div>
);

const FeatureSection = ({ title, description, imageSrc, reverse = false }) => (
    <section className="flex justify-center items-center py-16 ml-auto mr-auto px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-[1200px]">
          {!reverse ? (
            <>
              <TextSection title={title} description={description}/>
              <ImageSection imageSrc={imageSrc}/>
            </>
          )
          : (
            <>
              <ImageSection imageSrc={imageSrc}/>
              <TextSection title={title} description={description}/>
              </>
          )}
        </div>
    </section>
  );
  
  export default FeatureSection;
  