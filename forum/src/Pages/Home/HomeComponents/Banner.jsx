import bannerImage from "../../../assets/bannerimg.png";

const Banner = () => {
  return (
    <div className="h-auto py-20 flex  justify-center items-center"
      style={{
        backgroundImage: "url(https://i.postimg.cc/Dwvv1xH8/banner-bg.png)",
      }}
    >
      <div className="flex gap-8 lg:gap-0 items-center justify-center flex-col-reverse text-center lg:text-left lg:flex-row-reverse max-w-[1200px] mx-auto ">
        <img src={bannerImage} className="w-[700px]" />
        <div className="text-white">
          <p className="text-3xl">Learn New Technology</p>
          <h1 className="text-6xl font-bold mt-2">
          CodeCraft Hub:
          </h1>
          <p className="text-5xl mt-2">Unleashing IT Brilliance Where Professionals Share Expertise</p>
          <button className="py-3 px-6 mt-5 bg-[#B68C5A] text-white  rounded-md">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
