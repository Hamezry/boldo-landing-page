import { servicesThree } from "../dummyData";
import { FaCheckCircle } from "react-icons/fa";
import React, { useState } from "react";

const ServicesSectionThree = () => {
  return (
    <section className="container mx-auto my-20 px-5 sm:px-10 md:px-14">
      {servicesThree.map((content) => (
        <ServiceBlock key={content.id} content={content} />
      ))}
    </section>
  );
};

export default ServicesSectionThree;

const ServiceBlock = ({ content }) => (
  <div className="space-y-5 sm:space-y-10">
    <div className="relative rounded-xl grid [@media(max-width:900px)]:h-[300px]">
      <img
        src={content.img}
        className="w-full h-full object-cover rounded-xl"
        alt="Service Work"
      />
    </div>
    <div className="flex flex-col gap-x-5 md:flex-row justify-between space-y-7 md:space-y-0">
      <ServiceTitle title={content.title} />
      <ServiceList services={content.content} />
      <ServiceAccordion />
    </div>
  </div>
);

const ServiceTitle = ({ title }) => (
  <h3 className="text-center mx-auto md:mx-0 md:text-left max-w-2xl md:max-w-lg text-[26px] leading-8 sm:leading-[50px] xs:text-3xl tracking-tight text-gray-900 sm:text-4xl">
    {title}
  </h3>
);

const ServiceList = ({ services }) => (
  <div className="hidden flex-col w-full mx-auto md:mx-0 max-w-lg sm:max-w-xl md:max-w-md">
    {services.map((subdata) => (
      <ServiceItem key={subdata.sub} sub={subdata.sub} />
    ))}
  </div>
);

const ServiceItem = ({ sub }) => (
  <div className="mb-4 flex items-center justify-between border-b border-black pb-4 xs:text-lg">
    <span>{sub}</span>
    <FaCheckCircle className="sm:text-xl" />
  </div>
);

const ServiceAccordion = () => (
  <div className="p-4 w-full mx-auto md:mx-0 max-w-lg sm:max-w-xl md:max-w-md">
    <Accordion
      question="We connect our customers with the best?"
      answer="Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet."
    />
    <Accordion
      question="Android research & development rockstar?"
      answer="Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate."
    />
  </div>
);

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border-b border-black pb-4 text-[15px] xs:text-lg">
      <div
        className={`flex justify-between items-center gap-x-5 cursor-pointer ${
          isOpen ? "font-medium" : ""
        }`}
        onClick={toggleAccordion}
      >
        <div>{question}</div>
        <div
          className={`transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform bg-[#0A2640] text-white rounded-full p-0.5 hover:text-white h-[18px] xs:h-[20px] w-[18px] xs:w-[20px] flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-5i h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="mt-2 text-gray-700">{answer}</div>}
    </div>
  );
};


