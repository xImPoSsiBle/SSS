const ServiceItems = ({ firstImage, firstImageTitle, title, secondImage, secondImageTitle }) => {
  return (
    <div className="w-full mt-10 flex flex-col items-center gap-8 md:grid md:grid-cols-3 md:items-center md:gap-10">
      
      {/* Левая иконка */}
      <div className="flex flex-col items-center justify-center order-2 md:order-none">
        <img
          src={firstImage}
          alt=""
          className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
        />
        <span className="w-[200px] md:w-[300px] text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#F9D019] to-[#937B0F]">
          {firstImageTitle}
        </span>
      </div>

      {/* Текст по центру */}
      <div className="order-1 md:order-none flex justify-center">
        <h1 className="text-2xl font-bold max-w-[250px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
          {title}
        </h1>
      </div>

      {/* Правая иконка */}
      <div className="flex flex-col items-center justify-center order-3 md:order-none">
        <img
          src={secondImage}
          alt=""
          className="w-[70px] h-[70px] md:w-[100px] md:h-[100px]"
        />
        <span className="w-[200px] md:w-[300px] text-xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#F9D019] to-[#937B0F]">
          {secondImageTitle}
        </span>
      </div>

    </div>
  );
};

export default ServiceItems;
