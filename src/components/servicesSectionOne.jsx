import { FaArrowRight } from "react-icons/fa";
import { services } from "../dummyData";

const ServicesSectionOne = () => {
  return (
    <section
      id="services"
      className="bg-[#0A2640] px-5 sm:px-10 md:px-28 py-10"
    >
      <div className="py-5">
        <div className="max-w-4xl mx-auto text-center space-y-1.5">
          <p className="text-white sm:text-lg">Our Services</p>
          <h1 className="text-white text-[26px] xs:text-[36px] sm:text-[40px] md:text-5xl leading-9 sm:leading-[50px] md:leading-[60px] tracking-tight">
            Handshake infographic mass market crowdfunding iteration.
          </h1>
        </div>
        <div className="md:container mx-auto mt-10 sm:mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-fit flex flex-col items-start space-y-5 rounded-xl text-left transition-transform transform hover:-translate-y-3 hover:cursor-pointer duration-500"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-full w-[350px]"
              />
              <div className="text-left">
                <h3 className="text-2xl font-medium text-white rounded px-2">
                  {service.title}
                </h3>
              </div>
              <div className="max-w-[280px] px-2">
                <a
                  href="#"
                  className="flex items-center  gap-3 space-x-2 border-b-2 border-white pb-1 text-white font-semibold"
                >
                  <span>Explore page</span>
                  <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSectionOne;

