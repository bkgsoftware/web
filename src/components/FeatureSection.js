const FeatureSection = ({ title, description, imageSrc, reverse = false }) => (
    <section className="pt-16 lg:pt-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid gap-10 lg:gap-20 lg:grid-cols-2 content-center">
          <div className={`flex flex-col justify-center ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-center text-3xl lg:text-4xl font-bold mb-8 text-black">
              {title}
            </h2>
            <p className="text-center text-lg lg:text-xl text-black">
              {description}
            </p>
          </div>
          <div className={` mb-4 lg:mb-0 max-w-[275px] mx-auto lg:max-w-full ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <img src={imageSrc} alt={title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
  
  export default FeatureSection;
  