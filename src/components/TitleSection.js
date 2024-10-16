const TitleSection = ({ title, description }) => (
  <div className="text-center py-20 text-white bg-black">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      <div className="hidden md:block"></div>

      <div className="col-span-1">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      <div className="hidden md:block"></div>

    </div>
  </div>
);

export default TitleSection;
