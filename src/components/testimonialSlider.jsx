import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { userfeedback} from "../dummyData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  const generateBreakPointSettings = (breakpoints) => {
    return breakpoints.reduce((settings, { name, min, max, items }) => {
      settings[name] = {
        breakpoint: { max, min },
        items,
      };
      return settings;
    }, {});
  };

  const breakpoints = [
    { name: "superLargeDesktop", min: 3000, max: 4000, items: 5 },
    { name: "desktop", min: 1024, max: 3000, items: 3 },
    { name: "tablet", min: 550, max: 1024, items: 2 },
    { name: "mobile", min: 0, max: 550, items: 1 },
  ];

  const breakPointSettings = generateBreakPointSettings(breakpoints);

  const CustomNavigation = ({ next, previous }) => (
    <div className="absolute  md:top-[-40%] sm:right-[-50%] md:right-0 flex gap-6 space-x-2 p-2">
      <button
        className="shadow-md shadow-slate-500 hover:bg-[#1C3D5B] hover:text-white border-2 border-white bg-slate-50 text-[#1C3D5B] rounded-full text-lg sm:text-xl p-2 sm:p-4"
        onClick={previous}
      >
        <FaArrowLeft />
      </button>
      <button
        className="shadow-md shadow-slate-500 hover:bg-[#1C3D5B] hover:text-white border-2 border-white bg-slate-50 text-[#1C3D5B] rounded-full text-lg sm:text-xl p-2 sm:p-4"
        onClick={next}
      >
        <FaArrowRight />
      </button>
    </div>
  );

  return (
    <div className="relative mx-3 sm:mx-5">
      <Carousel
        shouldResetAutoplay
        arrows={false}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        responsive={breakPointSettings}
        customButtonGroup={<CustomNavigation />}
        renderButtonGroupOutside
      >
        {userfeedback.map(({ name, content, img, title }) => (
          <div
            key={name}
            className="flex flex-col justify-between space-y-8 sm:space-y-10 rounded-xl bg-white p-5 sm:p-7 md:p-8 mx-2 sm:min-h-[320px] w-fit duration-300 shadow-md"
          >
            {/* Feedback Text */}
            <p className="text-base sm:text-xl md:text-2xl">
              "{content} Lorem ipsum dolor sit amet"
            </p>

            {/* User Information */}
            <div className="flex items-center space-x-3 xs:space-x-4 sm:space-x-5">
              {/* User Image */}
              <img
                className="h-10 xs:h-12 sm:h-14 w-10 xs:w-12 sm:w-14 rounded-full"
                src={img}
                alt={name}
              />
              <div className="xs:space-y-1 sm:space-y-2">
                {/* Name */}
                <h4 className="text-sm xs:text-[14px] sm:text-[16px] font-bold">
                  {name}
                </h4>
                {/* Title */}
                <p className="text-xs xs:text-[12px] sm:text-[14px]">{title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;


