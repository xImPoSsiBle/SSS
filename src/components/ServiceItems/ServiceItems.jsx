
const ServiceItems = ({ firstImage, firstImageTitle, title, secondImage, secondImageTitle }) => {
  return (
    <div className="w-full flex items-center justify-around mt-30">
      <div className="flex flex-col items-center justify-center">
        <img
          src={firstImage}
          alt=""
          className="w-[100px] h-[100px]"
        />
        <span className="w-[300px] text-3xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#F9D019] to-[#937B0F]">
          {firstImageTitle}
        </span>
      </div>

      <h1 className="text-2xl max-w-[250px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999]">
        {title}
      </h1>

      <div className="flex flex-col items-center justify-center">
        <img
          src={secondImage}
          alt=""
          className="w-[100px] h-[100px]"
        />
        <span className="w-[300px] text-3xl text-center text-transparent bg-clip-text bg-gradient-to-b from-[#F9D019] to-[#937B0F]">
          {secondImageTitle}
        </span>
      </div>
    </div>
  )
}

export default ServiceItems