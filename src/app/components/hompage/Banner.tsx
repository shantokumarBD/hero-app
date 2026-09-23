import Image from "next/image";
import googlePlayBadge from "@/assets/goolgeplay.png";
import AppStore from "@/assets/appstore.png";
import BannerImage from "@/assets/hero.png";

const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 mt-0 md:mt-10">
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl md:text-6xl">
          We Build <br /> <span className="text-gradient">Productive</span> Apps
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl max-w-2xl lg:max-w-4xl">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex gap-4">
          <button className="btn">
            <Image
              src={googlePlayBadge}
              alt="Google Play"
              width={20}
              height={20}
            ></Image>
            Google Play
          </button>
          <button className="btn">
            <Image
              src={AppStore}
              alt="App Store"
              width={20}
              height={20}
            ></Image>
            App Store
          </button>
        </div>
      </div>
      <Image src={BannerImage} alt="Banner" width={500} height={500}></Image>
    </div>
  );
};

export default Banner;
