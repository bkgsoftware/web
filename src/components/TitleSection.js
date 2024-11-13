const TitleSection = ({ title, description }) => (
  <section className="flex justify-center items-center text-white bg-black py-16 ml-auto mr-auto px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
    <div className="flex flex-col items-center justify-center text-balance text-center max-w-2xl gap-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
      <p className="text-md lg:text-lg">{description}</p>
      </div>
  </section>
);

export default TitleSection;
