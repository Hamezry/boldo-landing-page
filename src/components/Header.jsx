import { hero } from "../../public/assets/index.jsx";
import Slider from "./Slider.jsx";

const Header = () => {
  return (
    <section className="pt-[80px] py-5 sm:py-8 md:py-10 px-5 sm:px-10 md:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-y-6 sm:gap-x-5">
        {/* Header Image */}
        <HeaderImage />

        {/* Header Text */}
        <HeaderText />
      </div>
      <Slider />
    </section>
  );
};


const HeaderImage = () => (
  <div className="col-span-2 relative h-64 xs:h-72 ss:h-80 md:h-96 overflow-hidden rounded-lg sm:order-last">
    <img
      src={hero}
      alt="graphics"
      className="absolute inset-0 w-full h-full hover:scale-105 duration-300"
    />
  </div>
);

const HeaderText = () => (
  <div className="col-span-3 flex flex-col items-center sm:items-start justify-center text-center sm:text-left mx-auto sm:mx-0 max-w-xl sm:max-w-full">
    <h1 className="text-[30px] xs:text-[36px] sm:text-[40px] md:text-5xl leading-[45px] sm:leading-[50px] font-medium tracking-tight text-[#000000] capitalize">
      Save Time By Building
      <span className="block sm:inline md:mt-4"> Fast With Boldo Template</span>
    </h1>
    <p className="mt-4 sm:mt-6 text-lg leading-7 sm:leading-8 text-[#777777] max-w-xl">
      Funding handshake buyer business-to-business metrics iPad partnership.
      First mover advantage innovator success deployment non-disclosure.
    </p>
    <HeaderButtons />
  </div>
);


const HeaderButtons = () => (
  <div className="mt-8 md:mt-12 flex items-center gap-x-6">
    <a
      href="#"
      className="bg-[#0A2640] text-white py-3 px-10 font-semibold shadow-sm rounded-3xl"
    >
      Buy Template
    </a>
    <a
      href="#"
      className="flex items-center gap-x-1.5 text-[#0A2640] border-2 border-[#0A2640] py-3 px-10 font-semibold leading-6 rounded-full"
    >
      <span>Explore</span>
    </a>
  </div>
);

export default Header;

