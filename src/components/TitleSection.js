const TitleSection = ({ title, description }) => (
    <div className="text-center py-20 text-white bg-black">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
  
  export default TitleSection;